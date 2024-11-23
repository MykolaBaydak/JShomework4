const objectsArray = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Object ${index + 1}`
}));
let currentPage = 0;
const itemsPerPage = 10;
const objectContainer = document.getElementById('objectContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
function displayObjects() {
    objectContainer.innerHTML = '';
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const objectsToDisplay = objectsArray.slice(start, end);
    objectsToDisplay.forEach(obj => {
        const div = document.createElement('div');
        div.textContent = `ID: ${obj.id}, Name: ${obj.name}`;
        objectContainer.appendChild(div);
    });
}
prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        displayObjects();
    }
});
nextButton.addEventListener('click', () => {
    if ((currentPage + 1) * itemsPerPage < objectsArray.length) {
        currentPage++;
        displayObjects();
    }
});
displayObjects();
