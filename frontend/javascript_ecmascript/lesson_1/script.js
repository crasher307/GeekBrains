"use strict";

// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из
// обоих массивов. Используйте spread оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]
// 2. Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив,
// содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в массив, а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArr = (arr1, arr2) => [...arr1, ...arr2];
console.log('mergeArr:', mergeArr(arr1, arr2));

// const removeDuplicates = (...props) => props.filter((e, idx) => props.indexOf(e) === idx);
const removeDuplicates = (...props) => [...(new Set(props))];
// const removeDuplicates = (...props) => props.reduce((data, e) => {
//     data.includes(e) || data.push(e);
//     return data;
// }, []);
console.log('removeDuplicates:', removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Задание 2 (Чистые функции 25 минут)
// 1. Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.
// 2. Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее
// значение этих чисел.
// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку,
// в которой первая буква каждого слова является заглавной.

const getEvenNumbers = (props) => props.reduce((data, e) => {
    !Number.isInteger(e) || e % 2 !== 0 || data.push(e);
    return data;
}, []);
console.log('getEvenNumbers:', getEvenNumbers([1, 2, 3, 2, 4, 1, 5]));

const calculateAverage = (props) => Math.round(props.reduce((sum, e) => sum + e, 0) / props.length * 100) / 100;
console.log('calculateAverage:', calculateAverage([1, 2, 3, 2, 4, 1, 5]));

const capitalizeFirstLetter = (str) => str.split(' ').map(e => `${e[0].toUpperCase()}${e.slice(1)}`).join(' ');
console.log('capitalizeFirstLetter:', capitalizeFirstLetter('test string for capitalizeFirstLetter'));

// Задание 3 (Замыкания 20 минут)
// Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами:
// add и subtract.
// Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на
// переданное число.
// Значение должно быть доступно только через методы объекта, а не напрямую.

const createCalculator = (num = 0) => {
    let val = num;
    return {
        get: () => val,
        add: (n) => val += n,
        subtract: (n) => val -= n,
    };
};
const calc = createCalculator(24);
console.log('calc = createCalculator(24):', calc);
console.log('calc.add(10):', calc.add(10));
console.log('calc.subtract(4):', calc.subtract(4));
console.log('calc.get():', calc.get());

// Задание 4 (Лексический контекст 15 минут)
// Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

const createGreeting = (userName) => () => `Hello, ${userName}!`;
const greeting = createGreeting('John');
console.log('greeting = createGreeting(John):', greeting);
console.log('greeting():', greeting());

// Задание 5 (тайминг 15 минут)
// Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает
// функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false
// в противном случае.
// Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: true
// console.log(isPasswordValid('secret')); // Ожидаемый результат: false

const createPasswordChecker = (maxLength) => (pass) => pass.length >= maxLength;
const isPasswordValid = createPasswordChecker(8);
console.log('isPasswordValid = createPasswordChecker(8):', createPasswordChecker(8));
console.log('isPasswordValid(password):', isPasswordValid('password'));
console.log('isPasswordValid(secret):', isPasswordValid('secret'));

// Задание 6 (Рекурсия 25 минут)
// Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

const sumDigits = (num) => num < 10 ? num : num % 10 + sumDigits(Math.trunc(num / 10));
console.log('sumDigits(123):', sumDigits(123));
console.log('sumDigits(456789):', sumDigits(456789));