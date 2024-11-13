const swap = (arr, index1, index2) => {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Неправильні індекси");
    }

    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
};

const result = swap([11, 22, 33, 44], 0, 1);
console.log(result);