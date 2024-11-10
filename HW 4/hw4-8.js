function createAndWriteListFromArray(array) {
    let list = '<ul>';

    for (let i = 0; i < array.length; i++) {
        list += `<li>${array[i]}</li>`;
    }

    list += '</ul>';

    document.write(list);
}

// Використання функції
const items = [42, 'яблуко', true, 'банан', false];
createAndWriteListFromArray(items);