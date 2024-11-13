const createParagraph = text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
};

// Використання функції
createParagraph("Це текст у параграфі.");