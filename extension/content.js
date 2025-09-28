console.log("Content script loaded. Awaiting instructions from popup.");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getPageContent") {
    console.log("Received request to get page content.");
    
    // Find all paragraph elements on the page.
    const pElements = document.querySelectorAll('p');

    // Create an array from the list of elements and get the text from each one.
    const allPText = Array.from(pElements).map(p => p.innerText.trim());
    
    // Join the array of texts into a single string.
    const combinedText = allPText.join('\n\n'); 

    // Send the scraped paragraph text back to the popup.
    sendResponse({ content: combinedText });
  }else if (request.action === "getPageLinks") {
    // This part is unchanged.
    const linkElements = document.querySelectorAll('a');
    
    const links = Array.from(linkElements).map(link => ({
      text: link.innerText,
      href: link.href // .href gives the full, absolute URL
    }));
    
    sendResponse({ links: links });
  }
});