class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
var clients = [];
clients.push(new Client(1, "John", "Doe", "john@example.com", "1234567890", ["product1", "product2"]));
clients.push(new Client(2, "Jane", "Smith", "jane@example.com", "0987654321", ["product3", "product4"]));
console.log(clients);