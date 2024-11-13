const sum = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Використання функції
const total = sum([1, 2, 10]);
console.log(total);