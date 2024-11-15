let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 6,
        modules: ['html', 'css', 'js', 'sass', 'angular', 'react']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        modules: ['html', 'css', 'java', 'spring']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        modules: ['html', 'css', 'python', 'django']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        modules: ['html', 'css', 'js', 'mongo']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        modules: ['html', 'css', 'js', 'react', 'nodejs', 'docker']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        modules: ['html', 'css', 'js', 'react', 'sass']
    }
];
let coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log('Курси з модулем "sass":', coursesWithSass);
let coursesWithDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log('Курси з модулем "docker":', coursesWithDocker);