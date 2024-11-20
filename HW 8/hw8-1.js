function deepCopy(obj, memo = new WeakMap()) {
    if (obj === null || typeof obj === 'undefined') {
        return obj;
    }
    if (typeof obj === 'number' && isNaN(obj)) {
        return NaN;
    }
    if (typeof obj !== 'object') {
        return obj;
    }
    if (memo.has(obj)) {
        return memo.get(obj);
    }
    if (Array.isArray(obj)) {
        const arrCopy = [];
        memo.set(obj, arrCopy);
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepCopy(obj[i], memo);
        }
        return arrCopy;
    }
    const objCopy = {};
    memo.set(obj, objCopy);

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepCopy(obj[key], memo);
        }
    }
    const symbols = Object.getOwnPropertySymbols(obj);
    for (const symbol of symbols) {
        objCopy[symbol] = deepCopy(obj[symbol], memo);
    }

    return objCopy;
}
const original = {
    number: 1,
    string: 'text',
    array: [1, 2, NaN],
    obj: { nested: true },
    func: function() { return 'test'; },
    symbolKey: Symbol('key'),
    [Symbol('symbol')]: 'symbolValue'
};
const copied = deepCopy(original);
console.log(copied);