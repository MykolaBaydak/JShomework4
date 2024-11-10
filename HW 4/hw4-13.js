function exchange(sumUAH, currencyValues, exchangeCurrency) {
    // Знайти об'єкт валюти, який відповідає заданій валюті exchangeCurrency
    const currency = currencyValues.find(item => item.currency === exchangeCurrency);

    // Якщо така валюта не знайдена, викинути помилку
    if (!currency) {
        throw new Error(`Валюта ${exchangeCurrency} не знайдена`);
    }

    // Розрахувати і повернути суму в заданій валюті
    return sumUAH / currency.value;
}

// Використання функції
const result = exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD');
console.log(result);