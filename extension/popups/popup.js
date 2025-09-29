/**
 * A helper function to create a pause to avoid API rate-limiting.
 * @param {number} ms Milliseconds to wait.
 */
const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * Extracts keywords from a sentence by removing common "stop words".
 * @param {string} text The input sentence.
 */
function extractKeywords(text) {
  const stopWords = new Set([
    'i', 'me', 'my', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 
    'of', 'at', 'by', 'for', 'with', 'about', 'to', 'from', 'in', 'out', 'on', 
    'is', 'are', 'was', 'were', 'be', 'been'
  ]);
  const words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().split(/\s+/);
  return words.filter(word => word && !stopWords.has(word));
}

/**

 * Calls the Fact Check API with a query string.
 * @param {string} q The query string to search for.
 */
async function search(q) {
  if (!q || q.trim() === '') {
    console.log("Skipping search for empty query.");
    return;
  }
  try {
    const API_KEY = ""; // !!! IMPORTANT: Add your key here
    const params = { languageCode: 'en', key: API_KEY, query: q };
    const baseUrl = 'https://factchecktools.googleapis.com/v1alpha1/claims:search';
    const queryParams = new URLSearchParams(params);
    const apiURL = `${baseUrl}?${queryParams.toString()}`;

    const response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();

    if (result.claims && result.claims.length > 0) {
    // Use the actual claim text returned by the API (first claim)
    console.log(`[SUCCESS] Fact-check found for query: "${q}"`, result); // keep your success log

  // Use all returned claim texts (or keep only [0] if you prefer)
  const texts = result.claims
    .map(c => (c.text || '').trim())
    .filter(Boolean);

  if (texts.length > 0) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0]?.id;
      if (!tabId) return;

      // send each claim text to the page highlighter
      texts.forEach(t => {
        chrome.tabs.sendMessage(tabId, {
          action: "highlightText",
          text: t
        });
      });
    });
  }
    } else {
      console.log(`[INFO] No fact-check found for query: "${q}"`);
    }
  } catch (error) {
    console.error(`Fact-check search failed for query "${q}":`, error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const scrapeButton = document.getElementById('scrapeButton');

    scrapeButton.addEventListener('click', () => {
        scrapeButton.disabled = true; // Disable button to prevent multiple clicks
        scrapeButton.textContent = "Checking...";

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            
            // 1. Send a message to the content script asking for the page text.
            chrome.tabs.sendMessage(activeTab.id, { action: "getPageContent" }, async (response) => {
                if (chrome.runtime.lastError) {
                    console.error("Error:", chrome.runtime.lastError.message);
                    scrapeButton.textContent = "Error! Reload page.";
                    return;
                }

                if (response && response.content) {
                    console.log("--- Text received from page. Starting fact-check process... ---");
                    
                    const combinedText = response.content;
                    const paragraphs = combinedText.split('\n\n');

                    // 2. Loop through each paragraph and sentence.
                    for (const paragraph of paragraphs) {
                        const sentences = paragraph.split('.');
                        for (const sentence of sentences) {
                            const cleanSentence = sentence.trim();
                            if (cleanSentence.length > 10) {
                                // 3. Extract keywords.
                                const keywords = extractKeywords(cleanSentence);
                                if (keywords.length > 1) {
                                    const queryString = keywords.join(' ');
                                    // 4. Call the fact-checker.
                                    await search(queryString);
                                    await delay(500); // Wait between checks
                                }
                            }
                        }
                    }
                    console.log("--- Fact-check process finished. ---");
                    scrapeButton.disabled = false;
                    scrapeButton.textContent = "Check Page Content";
                }
            });
        });
    });

    const getLinksButton = document.getElementById('getLinkButton');
    getLinksButton.addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { action: "getPageLinks" }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError.message);
                    return;
                }

                if (response && response.links) {

                    const unwantedKeywords = [
                        "tel", 
                        "reddit"
                    ]

                    const filteredLinks = response.links.filter(link => {
                        const notZeroLength = link.href.length > 0;
                        const hasunwantedKeywords = !unwantedKeywords.some(part => link.href.includes(part));
                        return notZeroLength && hasunwantedKeywords;
                    });


                    console.log(`Found ${filteredLinks.length} links:`);

                    const urlsToCheck = filteredLinks.map(link => link.href);
                    checkUrlSafety(urlsToCheck);

                    filteredLinks.forEach(link => {
                        console.log(`URL: ${link.href}`);
                    });


                }
            });
        });
    });


    const API_KEY = 'AIzaSyBk-tnCyhSJVqxluvCpSpSuT7jehZGA8gI';

    async function checkUrlSafety(urls) {
        const apiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`;

        const requestBody = {
            client: {
                clientId: "your-extension-name",
                clientVersion: "1.0.0"
            },
            threatInfo: {
                threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
                platformTypes: ["WINDOWS"],
                threatEntryTypes: ["URL"],
                threatEntries: urls.map(url => ({url: url}))
            }
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            const data = await response.json();

            if (data.matches) {
                console.warn("UNSAFE URLS FOUND: ", data.matches);
                return { status: 'unsafe', details: data.matches };
            } else {
                console.log("All URLs are SAFE.");
                return { status: 'safe' };
            }

        } catch (error) {
            console.error("Error checking URL:", error);
            return { status: 'error' };
        }
    }
});
