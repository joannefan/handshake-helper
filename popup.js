// Get the relevant sentences from storage and display them
browser.storage.local.get("relevantSentences").then((result) => {
    const sentences = result.relevantSentences || "None found";
    document.getElementById("sentences").textContent = sentences;
});
