function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
users.push(new User(1, "John", "Doe", "john@example.com", "1234567890"));
users.push(new User(2, "Jane", "Smith", "jane@example.com", "0987654321"));
console.log(users);