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

  /*else if (request.action === "highlightText") {
    console.log("Highlighting text:", request.text);
  
    const searchText = request.text.trim();
    if (!searchText) return;
  
    const escaped = searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(escaped, "gi"); // case-insensitive global


  
    const bodyTextNodes = document.evaluate(
      "//text()[normalize-space(.) != '']",
      document.body,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );
  
    for (let i = 0; i < bodyTextNodes.snapshotLength; i++) {
      const node = bodyTextNodes.snapshotItem(i);
      if (node.nodeType === Node.TEXT_NODE && regex.test(node.nodeValue)) {
        const frag = document.createDocumentFragment();
        let lastIndex = 0;
  
        node.nodeValue.replace(regex, (match, offset) => {
          // text before the match
          frag.appendChild(document.createTextNode(node.nodeValue.slice(lastIndex, offset)));
  
          // highlight span
          const span = document.createElement("span");
          span.className = "factcheck-highlight";
          span.textContent = match;
          frag.appendChild(span);
  
          lastIndex = offset + match.length;
        });
  
        // text after last match
        frag.appendChild(document.createTextNode(node.nodeValue.slice(lastIndex)));
  
        node.parentNode.replaceChild(frag, node);
      }
    }
  
    sendResponse({ success: true });

  } */

  else if (request.action === "highlightText") {
    console.log("Highlighting everywhere:", request.text);
  
    const searchText = request.text.trim();
    if (!searchText) return;
  
    const escaped = searchText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "gi");
  
    const bodyTextNodes = document.evaluate(
      "//text()[normalize-space(.) != '']",
      document.body,
      null,
      XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
      null
    );
  
    for (let i = 0; i < bodyTextNodes.snapshotLength; i++) {
      const node = bodyTextNodes.snapshotItem(i);
  
      if (node.nodeType === Node.TEXT_NODE && regex.test(node.nodeValue)) {
        const frag = document.createDocumentFragment();
        let lastIndex = 0;
  
        node.nodeValue.replace(regex, (match, offset) => {
          frag.appendChild(document.createTextNode(node.nodeValue.slice(lastIndex, offset)));
  
          const span = document.createElement("span");
          span.className = "factcheck-highlight";
          span.textContent = match;
          frag.appendChild(span);
  
          lastIndex = offset + match.length;
        });
  
        frag.appendChild(document.createTextNode(node.nodeValue.slice(lastIndex)));
        node.parentNode.replaceChild(frag, node);
      }
    }
  
    sendResponse({ success: true });
  }
  // Return true to indicate the response will be sent asynchronously.
  return true;
});