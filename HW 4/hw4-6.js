function createAndWriteList(text) {
    const list = `<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`;

    document.write(list);
}

// Використання функції
createAndWriteList("Це елемент списку");