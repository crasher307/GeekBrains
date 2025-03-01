"use strict";

// Задание 1 (тайминг 20 минут)
// 1. Создайте объект Person, представляющий человека, с следующими свойствами: name, age и gender. Добавьте также
// методы introduce и changeName. Метод introduce должен выводить информацию о человеке, включая его имя, возраст
// и пол. Метод changeName должен изменять имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

const person = {
    name: 'John',
    age: 25,
    gender: 'male',
    introduce: function () {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName: function (name) {
        this.name = name;
    },
};
person.introduce();
person.changeName('Mike');
person.introduce();

// Задание 2 (тайминг 20 минут)
// 1. Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест.
// Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о том, что собака лает.
// Используйте одалживание метода eat() из объекта Animal для объекта Dog, чтобы вывести сообщение о том, что
// собака ест.
// Одалживание метода eat() из объекта Animal к объекту Dog
// Dog.eat = Animal.eat;
// Dog.eat(); // Вывод: Rex is eating.

const Animal = {
    name: 'Animal',
    eat: function () {
        console.log(`${this.name} is eating.`);
    },
};
const Dog = {
    name: 'Rex',
    bark: function () {
        console.log(`${this.name} is barking.`);
    },
    eat: Animal.eat,
};
Dog.eat();

// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(), которые выполняют соответствующие
// математические операции над двумя числами. Используйте методы call и apply для вызова этих методов с передачей
// аргументов.
// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

const calculator = {
    add: function () {
        return this.num1 + this.num2;
    },
    subtract: function () {
        return this.num1 - this.num2;
    },
    multiply: function () {
        return this.num1 * this.num2;
    },
};
const calc = {
    num1: 5,
    num2: 3,
};
console.log(calculator.add.call(calc)); // Вывод: 8
console.log(calculator.subtract.apply(calc, Object.values(calc))); // Вывод: 2

// Задание 4 (Объекты через class 25 минут)
// 1. Создайте класс Person, который имеет свойства name и age, а также метод introduce(), который выводит сообщение
// с представлением имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`);
    }

    changeName(name) {
        this.name = name;
    }
}

const pers = new Person('John', 25, 'male');
pers.introduce();
pers.changeName('Mike');
pers.introduce();

// Задание 5 (Class 30 минут)
// Создайте класс BankAccount, который представляет банковский счет. У него должны быть свойства accountNumber
// (номер счета) и balance (баланс), а также методы deposit(amount) для пополнения счета и withdraw(amount) для
// снятия денег со счета. Класс должен иметь также статическое свойство bankName, которое содержит название банка.
// const account1 = new BankAccount("1234567890", 1000);
// account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
// account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
// account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890

class BankAccount {
    static bankName = 'BANK NAME';
    #accountNumber;
    #balance;

    constructor(accountNumber, balance) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }

    log(message, viewBalance = true) {
        const view = {
            bankName: `--- ${BankAccount.bankName} ---`.padEnd(33, '-'),
            message,
            balance: viewBalance ? `Balance: ${this.#balance}` : '',
            lastLine: ''.padEnd(33, '-'),
        };
        console.log(Object.values(view).filter(e => e.length > 0).join('\n'));
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            return this.log(`Error: incorrect amount '${amount}'`, false);
        }
        this.#balance += amount;
        this.log(`Deposited ${amount} into account ${this.#accountNumber}`);
    }

    withdraw(amount) {
        if (!Number.isFinite(amount)) {
            return this.log(`Error: incorrect amount '${amount}'`, false);
        }
        if (this.#balance - amount <= 0) {
            return this.log(`Error: Insufficient funds in account ${this.#accountNumber}`, true);
        }
        this.#balance -= amount;
        this.log(`Withdrawn ${amount} from account ${this.#accountNumber}`);
    }
}

const account1 = new BankAccount('1234567890', 1000);
console.log('account1', account1);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890