class Car {
        constructor(model, manufacturer, year, maxSpeed, engineVolume) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engineVolume = engineVolume;
        }

        drive() {
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
        }
        info() {
            console.log(`Модель: ${this.model}`);
            console.log(`Виробник: ${this.manufacturer}`);
            console.log(`Рік випуску: ${this.year}`);
            console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
            console.log(`Об'єм двигуна: ${this.engineVolume} л`);
        }
        increaseMaxSpeed(newSpeed) {
            this.maxSpeed += newSpeed;
        }

        changeYear(newValue) {
            this.year = newValue;
        }

        addDriver(driver) {
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
