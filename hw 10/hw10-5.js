window.onload = function() {
    const sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

    const sessionsContainer = document.getElementById('sessionsContainer');

    if (sessionsList.length === 0) {
        sessionsContainer.textContent = 'Немає записів про відвідування.';
        return;
    }

    const list = document.createElement('ul');

    sessionsList.forEach(session => {
        const listItem = document.createElement('li');
        listItem.textContent = session;
        list.appendChild(listItem);
    });

    sessionsContainer.appendChild(list);
};
