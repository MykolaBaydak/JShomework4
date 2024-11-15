//Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];

strings.forEach((string) => {
    console.log(`The length of '${string}' is ${string.length}.`);
});