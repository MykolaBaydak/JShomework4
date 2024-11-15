function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }
    this.info = function() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна: ${this.engineVolume} л`);
    }
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function(newValue) {
        this.year = newValue;
    }

    this.addDriver = function(driver) {
        this.driver = driver;
    }
}
let car = new Car("Civic", "Honda", 2021, 180, 1.8);
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2022);

let driver = {
    name: "John Doe",
    licenseNumber: "ABC1234",
    age: 30
};
car.addDriver(driver);
console.log(car);