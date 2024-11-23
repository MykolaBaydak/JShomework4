const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const ageInput = document.getElementById('age');
const submitButton = document.getElementById('submitButton');
const outputDiv = document.getElementById('output');
submitButton.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const age = ageInput.value.trim();
    if (!name || !surname || !age) {
        outputDiv.textContent = 'Будь ласка, заповніть усі поля.';
        return;
    }
    const user = {
        name: name,
        surname: surname,
        age: parseInt(age),
    };
    outputDiv.textContent = `User Object: ${JSON.stringify(user)}`;
});