function getRelevantSentences(text) {
    const sentences = text.split(/(?<=[.!?*-])\s+/);
    const relevantSentences = [];

    for (const s of sentences) {
        const sentence = s.toLowerCase();
        if (sentence.includes("years") && sentence.includes("experience")) {
            relevantSentences.push(s);
        } else if (sentence.includes("visa") || sentence.includes("sponsor")) {
            relevantSentences.push(s);
        } else if (sentence.includes("citizen")) {
            relevantSentences.push(s);
        } else if (sentence.includes("202")) {
            // graduation date like 2025 / 2026
            relevantSentences.push(s);
        }
    }

    return relevantSentences;
}

function handleClick() {
    console.log('Button clicked!');
    // Select all <p> and <li> elements inside the specified container
    const paragraphs = document.querySelectorAll('div.sc-eRCIUp.eUfwnN > div > div > p');
    const listItems = document.querySelectorAll('div.sc-eRCIUp.eUfwnN > div > div > ul > li');
    let allText = '';

    // Collect text from <p> elements
    paragraphs.forEach(paragraph => {
        allText += paragraph.textContent + '. ';
    });

    // Collect text from <li> elements
    listItems.forEach(li => {
        allText += li.textContent + '. ';
    });

    const relevantSentences = getRelevantSentences(allText);

    console.log(relevantSentences);
    browser.runtime.sendMessage({ action: "show_popup", sentences: relevantSentences });
}

const buttonSelector1 = 'div.sc-fxTzYC.vPwRy';
const buttonSelector2 = 'button.sc-bjCGfv.sc-ddsBQL.cBYAgy.jYrokq.view-more-button';

document.body.addEventListener('click', function(event) {
    if (event.target.matches(buttonSelector1) || event.target.matches(buttonSelector2)) {
        handleClick();
    }
});