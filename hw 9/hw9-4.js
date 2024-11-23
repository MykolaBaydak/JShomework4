let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach(course => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = course.title;
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = `Duration: ${course.monthDuration} months`;
    itemDiv.appendChild(heading);
    itemDiv.appendChild(description);
    document.body.appendChild(itemDiv);
});