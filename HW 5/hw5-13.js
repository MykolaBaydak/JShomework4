const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const currency = currencyValues.find(item => item.currency === exchangeCurrency);

    if (!currency) {
        throw new Error(`Валюта ${exchangeCurrency} не знайдена`);
    }

    return sumUAH / currency.value;
};

// Використання функції
const result = exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log(result);