// Listen for messages from the content script
browser.runtime.onMessage.addListener((message) => {
    if (message.action === "show_popup") {
        const sentences = message.sentences.join('\n\n');

        browser.action.setPopup({ popup: "popup.html" }); 
        browser.action.openPopup(); // Open the popup: TODO not working

        browser.storage.local.set({ relevantSentences: sentences });
    }
});
