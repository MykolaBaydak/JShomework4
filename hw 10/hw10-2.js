const ageInput = document.getElementById('ageInput');
const checkAgeButton = document.getElementById('checkAgeButton');
const message = document.getElementById('message');
checkAgeButton.addEventListener('click', function() {const age = parseInt(ageInput.value);
    if (isNaN(age)) {
        message.textContent = 'Будь ласка, введіть коректний вік';
        return;
    }
    if (age < 18) {
        message.textContent = 'Вам ще немає 18 років.';
    } else {
        message.textContent = 'Вік підтверджено.';
    }
});