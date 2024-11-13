const createListFromArray = array => {
    const ul = document.createElement('ul');

    array.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
};

// Використання функції
const elements = [42, 'яблуко', true, 'банан', false];
createListFromArray(elements);