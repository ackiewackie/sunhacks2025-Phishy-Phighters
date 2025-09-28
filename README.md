## Inspiration  
We noticed how often misinformation and phishing attempts sneak into people’s daily browsing, especially on social media. Many users don’t fact-check or know what red flags to look for. We wanted to make cybersecurity practices **accessible, engaging, and interactive**, so anyone can learn while they browse. That’s how *Phishy Waters* (the web extension) and *Phishy Phighters* (the web app) were born.  

## What it does  
- **Phishy Waters (browser extension):**  
  Scrapes page text and links, filters them, and uses Fact Check API to flag suspicious or false content. Currently, it works on Reddit, having the capability to highlight misleading claims and dangerous links in real time.  

- **Phishy Phighters (web app):**  
  An interactive classroom reimagined. Instead of static quizzes, a **Gemini-powered chatbot (“Phishy”)** guides users through phishing basics, misinformation spotting, and safe browsing by asking questions, explaining mistakes, and adapting to the user’s level.  

Together, they create a hands-on safety experience: **learn, test, and defend yourself in real time**.  

## How we built it  
- **Extension:**  
  - Built a page content + link scraper.  
  - Passed page text into Google’s Fact Check API to cross-reference against misinformation databases.  
  - Displayed results in a browser popup for instant user feedback.  

- **Web app:**  
  - Next.js React frontend with Tailwind for styling.  
  - Deployed on **Vercel**, and utilized Vercel Typescript Template to start!
  - Integrated **Google Generative AI (Gemini) API** to power the chatbot.  
  - Managed message history and context for smooth multi-turn conversations.  
  - Designed mascot “Phishy the Fish” to make cybersecurity less intimidating.  

## Challenges we ran into  
- Getting the **Fact Check API** to reliably parse scraped text (needed filtering + formatting).  
- Extension works only on Reddit, since other sites render DOM differently.  
- Integrating Gemini required careful handling of **conversation state**.  
- Balancing educational accuracy with **fun, engaging design**.  

## Accomplishments that we're proud of  
- Building a working prototype of **both a browser extension and a chatbot app** in < 24 hrs.  
- Successfully connecting **Google APIs** (Fact Check + Gemini).  
- Creating a fun and accessibly learning experience that makes security approachable.  

## What we learned  
- How to structure a **browser extension** with background scripts and popup UIs.  
- Effective use of **Google Fact Check API**.  
- Best practices for maintaining conversation context in **LLM-powered chatbots**.  

## What's next for Phishy Phighters  
- Expand extension support to **Twitter/X, Facebook, YouTube, and news sites**.  
- Add **UI spoof detection** and more phishing indicators.  
- Improve chatbot with **adaptive learning paths** and personalized feedback.  
- Combining extension + chatbot for one seamless experience.  
- Release as a free **public tool for safer browsing**.  
