    class Cinderella {
        constructor(name, age, footSize) {
            this.name = name;
            this.age = age;
            this.footSize = footSize;
        }
    }

// Створення масиву з 10 попелюшок
let cinderellas = [
    new Cinderella("Cindy", 20, 7),
    new Cinderella("Ella", 22, 6),
];
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
let prince = new Prince("Prince Charming", 30, 7);
let foundCinderella = cinderellas.find(function(cinderella) {
    return cinderella.footSize === prince.foundShoe;
});
console.log(foundCinderella);
