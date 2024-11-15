let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortedCourses = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
let filteredCourses = sortedCourses.filter(course => course.monthDuration > 5);
let mappedCourses = filteredCourses.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));

console.log(mappedCourses);