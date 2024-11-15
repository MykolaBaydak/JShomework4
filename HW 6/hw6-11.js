const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const colors = { 'spade': 'black', 'clubs': 'black', 'diamond': 'red', 'heart': 'red' };
let deck = [];
for (let suit of suits) {
    for (let value of values) {
        deck.push({ cardSuit: suit, value: value, color: colors[suit] });
    }
}
let groupedBySuits = deck.reduce((accumulator, card) => {
    switch (card.cardSuit) {
        case 'spade':
            accumulator.spades.push(card);
            break;
        case 'diamond':
            accumulator.diamonds.push(card);
            break;
        case 'heart':
            accumulator.hearts.push(card);
            break;
        case 'clubs':
            accumulator.clubs.push(card);
            break;
    }
    return accumulator;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
console.log(groupedBySuits);