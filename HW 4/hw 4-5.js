function createAndAppendParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
}

// Використання функції
createAndAppendParagraph("Це текст у параграфі.");