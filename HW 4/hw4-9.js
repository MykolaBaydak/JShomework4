function displayObjects(array) {
    array.forEach(obj => {
        const div = document.createElement('div');

        const idParagraph = document.createElement('p');
        idParagraph.textContent = `ID: ${obj.id}`;

        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = `Name: ${obj.name}`;

        const ageParagraph = document.createElement('p');
        ageParagraph.textContent = `Age: ${obj.age}`;

        div.appendChild(idParagraph);
        div.appendChild(nameParagraph);
        div.appendChild(ageParagraph);

        document.body.appendChild(div);
    });
}

const users = [
    { id: 1, name: 'Олександр', age: 25 },
    { id: 2, name: 'Марія', age: 30 },
    { id: 3, name: 'Іван', age: 20 }
];

displayObjects(users);