const counterElement = document.getElementById('counter');
function getCounterValue() {
    const storedValue = localStorage.getItem('counter');
    return storedValue ? parseInt(storedValue) : 0;
}
function updateCounter() {
    let counterValue = getCounterValue();

    counterValue += 1;
    localStorage.setItem('counter', counterValue);

    counterElement.textContent = counterValue;
}

updateCounter();