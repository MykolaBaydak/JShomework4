const rowsInput = document.getElementById('rows');
const columnsInput = document.getElementById('columns');
const contentInput = document.getElementById('content');
const createTableButton = document.getElementById('createTableButton');
const tableContainer = document.getElementById('tableContainer');
createTableButton.addEventListener('click', function() {
    const numRows = parseInt(rowsInput.value);
    const numColumns = parseInt(columnsInput.value);
    const cellContent = contentInput.value;
    if (isNaN(numRows) || isNaN(numColumns) || numRows <= 0 || numColumns <= 0) {
        tableContainer.textContent = 'Введіть коректні значення для рядків і стовпців.';
        return;
    }
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < numColumns; j++) {
            const cell = document.createElement('td');
            cell.textContent = cellContent;
            cell.style.border = '1px solid black';
            cell.style.padding = '8px';
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
});
