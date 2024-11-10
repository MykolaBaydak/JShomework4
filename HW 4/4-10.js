function findMinNumber(array) {
    if (array.length === 0) {
        throw new Error("Масив не повинен бути порожнім");
    }

    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Використання функції
const numbers = [5, 8, 12, -3, 7, 0];
const minNumber = findMinNumber(numbers);
console.log(minNumber);