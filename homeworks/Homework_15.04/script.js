// Напишите класс Circle, который принимает радиус в качестве параметра конструктора.
// Добавьте метод area, который возвращает площадь круга, и метод circumference, возвращающий длину окружности.
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  circumference() {
    return 2 * Math.PI * this.radius;
  }
}

const newCircle = new Circle(21);
console.log("Area is:", newCircle.area());
console.log("Circumference is:", newCircle.circumference());

// Создайте класс Book, который принимает название книги, автора и количество страниц в качестве параметров конструктора.
// Добавьте метод info, который выводит информацию о книге в формате "Книга: [название], Автор: [автор], Страниц: [количество]".

class Book {
  constructor(name, author, pageQuantity) {
    this.name = name;
    this.author = author;
    this.pageQuantity = pageQuantity;
  }
  info() {
    return `Книга: ${this.name}, Автор: ${this.author}, Страниц: ${this.pageQuantity}`;
  }
}
const newBook = new Book("From Blood and Ash", "Jennifer Armentrout", 622);
console.log(newBook.info());

// Напишите класс BankAccount, который принимает имя владельца и начальный баланс. Добавьте методы deposit и withdraw для управления счетом.

class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(value) {
    this.balance += value;
    console.log(
      `${value} has been deposited to the user ${this.name} account. New balance: ${this.balance}`
    );
  }
  withdraw(value) {
    if (value <= this.balance) {
      this.balance -= value;
      console.log(
        `${value} has been withdrawed from the user ${this.name} account. New balance: ${this.balance}`
      );
    } else {
       console.log("Sorry, you don't have so much money");
    }
  }
}
const newBankAccount = new BankAccount("Yelyzaveta Shydenko", 565)
console.log(newBankAccount);

newBankAccount.deposit(50)
newBankAccount.withdraw(100)
newBankAccount.withdraw(1500)

// Создайте класс Animal, который принимает имя и тип(например, "кот" или "собака") в качестве параметров конструктора.
// Добавьте метод sound, который выводит звук, производимый животным.

class Animal{
   constructor(name, type){
      this.name = name;
      this.type = type;
   }
   sound() {
      if (this.type === 'cat') {
         console.log(`${this.name} meows`);
      } else if (this.type === 'dog') {
         console.log(`${this.name} bark`);
      }
   }
}

const newAnimalCat = new Animal("Aurora", "cat")
const newAnimalDog = new Animal("Zeus", "dog")

newAnimalCat.sound()
newAnimalDog.sound()

// Напишите класс Email, который принимает адрес электронной почты в качестве параметра конструктора.Добавьте методы send, receive, reply,
//    чтобы моделировать основные функции электронной почты.
// Например, send - Отправка с адреса … получателю … произведена успешно, или можете поэксперементировать от себя

class Email {
  constructor(email) {
    this.email = email;
  }
  send(anotherEmail) {
    console.log(`Email sended from ${this.email} to ${anotherEmail}`);
  }
  receive(anotherEmail) {
    console.log(`Email received from ${anotherEmail}`);
  }
  reply(content, anotherEmail) {
    console.log(
      `Answer for email from ${anotherEmail}, text content: '${content}', sender ${this.email}`
    );
  }
}

const newEmail = new Email("example2002@example.com")

newEmail.send("personanongrata@example.com");
newEmail.receive("personanongrata@example.com");
newEmail.reply("Will be done in 30 minute", "personanongrata@example.com");