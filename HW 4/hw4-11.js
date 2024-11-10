function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Використання функції
const result = sum([1, 2, 10]);
console.log(result);  // Виведе: 13