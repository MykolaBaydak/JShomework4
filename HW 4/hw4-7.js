function createAndWriteList(text, numberOfItems) {
    let list = '<ul>';

    for (let i = 0; i < numberOfItems; i++) {
        list += `<li>${text}</li>`;
    }

    list += '</ul>';

    document.write(list);
}

// Використання функції
createAndWriteList("Це елемент списку", 5);