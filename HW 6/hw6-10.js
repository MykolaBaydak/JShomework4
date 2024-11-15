const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const colors = { 'spade': 'black', 'clubs': 'black', 'diamond': 'red', 'heart': 'red' };
let deck = [];
for (let suit of suits) {
    for (let value of values) {
        deck.push({ cardSuit: suit, value: value, color: colors[suit] });
    }
}
let aceOfSpades = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Піковий туз:', aceOfSpades);
let sixes = deck.filter(card => card.value === '6');
console.log('Всі шістки:', sixes);
let redCards = deck.filter(card => card.color === 'red');
console.log('Всі червоні карти:', redCards);
let diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log('Всі буби:', diamonds);
let clubsNineOrMore = deck.filter(card =>
    card.cardSuit === 'clubs' && values.indexOf(card.value) >= values.indexOf('9')
);
console.log('Всі трефи від 9 та більше:', clubsNineOrMore);