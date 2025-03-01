"use strict";

// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj.
// Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом
// Object.prototype.

const getPrototypeChain = (obj) => {
    const arr = [obj];
    let currentObj = obj;
    while (currentObj = Object.getPrototypeOf(currentObj)) {
        arr.push(currentObj);
    }
    return arr;
};
const proto = getPrototypeChain({name: 'John'});
console.log('getPrototypeChain({name: \'John\'})', proto);

/*
// Задание 2 (20минут)
// Напишите конструктор объекта Person, который принимает два аргумента: name (строка) и age (число). Конструктор
// должен создавать объект с указанными свойствами name и age и методом introduce(), который выводит в консоль строку
// вида "Меня зовут [name] и мне [age] лет.".
// // Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

// Задание 3 (call, apply 20 минут)
// Напишите конструктор объекта BankAccount, который будет представлять банковский счет. Конструктор должен принимать
// два аргумента: accountNumber (строка) и balance (число). Конструктор должен создавать объект с указанными свойствами
// accountNumber и balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает баланс на указанную сумму, если на счету есть
// достаточно средств. Если средств недостаточно, выводится сообщение "Недостаточно средств на счете.".
// 3. getBalance(): возвращает текущий баланс счета.
// // Пример:
// const account1 = new BankAccount("1234567890", 1000);
// console.log(account1.getBalance()); // Вывод: 1000
// account1.deposit(500);
// console.log(account1.getBalance()); // Вывод: 1500
// account1.withdraw(200);
// console.log(account1.getBalance()); // Вывод: 1300
// account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."
*/

// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// - Свойство name (строка) - имя животного.
// - Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:
// - Свойство breed (строка) - порода собаки.
// - Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".
// // Пример:
// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

class Animal {
    constructor(name) {
        this.name = String(name);
    }
    speak() {
        console.log(`${this.name} издает звук.`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака ${this.name} принесла мяч.`);
    }
}

const animal1 = new Animal('Животное');
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog('Бобик', 'Дворняжка');
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

// Задание 5
// Создать класс "Калькулятор" с приватными полями "последний результат" и "текущее значение". Класс должен иметь
// публичные методы "сложить", "вычесть", "умножить" и "разделить", которые будут изменять значение текущего значения
// в соответствии с выбранной операцией. Также класс должен иметь статическое поле "точность", которое будет задавать
// количество знаков после запятой при выводе результата.

class Calculator {
    static accuracy = 2;
    #lastResult = 0;
    #currentVal = 0;
    add(num) {
        return this.#save(this.#currentVal + num);
    }
    subtract(num) {
        return this.#save(this.#currentVal - num);
    }
    multiply(num) {
        return this.#save(this.#currentVal * num);
    }
    divide(num) {
        return num > 0 ? this.#save(this.#currentVal / num) : this.#error('На ноль делить нельзя');
    }
    #error(message) {
        console.error(message);
        return this;
    }
    #save(val) {
        this.#lastResult = this.#currentVal;
        this.#currentVal = Number(val.toFixed(Calculator.accuracy));
        console.log('Result:', this.#currentVal);
        return this;
    }
    get result() {
        this.#lastResult = this.#currentVal;
        return this.#lastResult;
    }
}
const calc = new Calculator();
console.log(
    'RESULT >>',
    calc.add(10.61111)
        .add(20.12222)
        .subtract(10.33333)
        .multiply(2)
        .divide(0)
        .divide(4)
        .result
);

// Задание 6
// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта". Класс должен иметь
// публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту", которые будут изменять
// соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст", которое будет
// задавать максимально допустимый возраст для всех создаваемых объектов.

class User {
    static list = [];
    static #minAge = 16;
    static #maxAge = 80;
    #name;
    #age;
    #email;
    constructor(name, age, email) {
        User.list.push(
            this.changeName(name)
                .changeAge(age)
                .changeEmail(email)
        );
    }
    #error(message) {
        console.error(message);
        return this;
    }
    changeName(name) {
        this.#name = String(name);
        return this;
    }
    changeAge(age) {
        const valid = {
            min: age >= User.#minAge,
            max: age <= User.#maxAge,
        };
        if (!Object.values(valid).includes(false)) {
            this.#age = Number(age);
        } else {
            this.#error(`${!valid.min ? 'Мин.' : 'Макс.'} допустимый возраст ${!valid.min ? User.#minAge : User.#maxAge}`);
        }
        return this;
    }
    changeEmail(email) {
        this.#email = String(email);
        return this;
    }
}

new User('John', 30, 'test@test.tt');
new User('Bob', 90, 'test2@test.tt');
new User('Kelvin', 12, 'test3@test.tt');
User.list[0].changeName('Alex');
User.list[1].changeAge(43);
User.list[2].changeAge(17);
console.log(...User.list);

// Задание 7
// Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы
// "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта
// и возвращать стоимость товара соответственно. Также класс должен иметь статическое поле "максимальное количество",
// которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

class Product {
    static list = [];
    #name;
    #price;
    #amount;
    constructor(name, price, amount) {
        Product.list.push(
            this.#changeName(name)
                .changePrice(price)
                .changeAmount(amount)
        );
    }
    #changeName(name) {
        this.#name = String(name);
        return this;
    }
    changePrice(price) {
        if (price < 0) {
            console.error(`Цена не может быть меньше 0 (${price})`);
        } else {
            this.#price = Number(price);
        }
        return this;
    }
    changeAmount(amount) {
        let newAmount = Number(amount);
        newAmount >= 0 || (newAmount += this.#amount);
        newAmount >= 0 ? this.#amount = Number(newAmount) : console.error(`Кол-во не может быть меньше 0 (${amount})`);
        return this;
    }
    get name() {
        return this.#name;
    }
    get amount() {
        return this.#amount;
    }
}

new Product('Яблоки', 200, 200);
new Product('Груши', 240, 2400);
Product.list[0].changeAmount(1500);
Product.list[0].changeAmount(-200);
console.log(...Product.list);
console.log(Product.list.map(e => `${e.name} ${e.amount}`).join('\n'));