"use strict";

// ---------------------------------------------------------
// Задание 1:
//
// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.
// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.
// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.
// 4. Удалите свойство surname.
//
// Тайминг: 20 минут.

// 1
// const weekDays = {
//     1:'Monday',
//     2:'Thuestday',
//     3:'Wednesday',
//     4:'Thirsday',
//     5:'Friday',
//     6:'Saturday',
//     7:'Sunday',
// }
// console.log(weekDays[2]);

// 2
// const userData = {
//     name: 'Freddie',
//     surname: 'Mercury',
//     patronymic: prompt('Введите отчество'), // 3
//     age: 45,
// };
// delete userData.surname; // 4
// console.log(`${userData.name} ${userData.surname} ${userData.patronymic} ${userData.age}`);
// console.log(userData);

// ---------------------------------------------------------
// Задание 2:
//
// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`
// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.
// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.
//
// Тайминг: 25 минут.

// const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const weekNums = [1, 2, 3, 4, 5, 6, 7];
// const weekResult = {};
// for (let i = 0; i < weekDays.length; i++) {
//     weekResult[weekDays[i]] = weekNums[i];
// }
// console.log(weekResult);
//
// const points = {
//     x: 1,
//     y: 2,
//     z: 3,
// };
// for (const key in points) {
//     points[key] = points[key] ** 2;
// }
// console.log(points);

// ---------------------------------------------------------
// Задание 3:
//
// Найдите сумму всех чисел, приведенного объекта.
//
// Тайминг: 20 минут.

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//         key4: {
//             hello: 111,
//         },
//     },
//     key55: 23,
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
//
// const sum = (obj) => {
//     if (typeof obj === 'object') {
//         let result = 0;
//         Object.values(obj).forEach(el => {
//             result += sum(el);
//         });
//         return result;
//     } else if (Number.isFinite(obj)) {
//         return obj;
//     }
//     return 0;
// };
// console.log(sum(obj));

// ---------------------------------------------------------
// Задание 4:
//
// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать,
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль
// выводится текст: “вы проиграли”.
//
// Тайминг: 25 минут.

// const riddle = {
//     question: 'Зимой и летом одним цветом',
//     answer: 'ель',
//     help: [
//         'колючая',
//         'зеленая',
//         'новогодняя',
//     ],
//     askQuestion() {
//         let useHelp = 0;
//         let help = this.help;
//         const ask = (help) => {
//             return prompt(`${this.question}?` + (help ? `\nПодсказка: ${help}` : '')) === this.answer;
//         };
//         for (let i = 0; i < this.help.length + 1; i++, useHelp++) {
//             if (ask(this.help[i - 1])) {
//                 console.log('Все верно. Ура!');
//                 return;
//             }
//         }
//         console.log('Вы проиграли.');
//     },
// };
//
// riddle.askQuestion();

// ---------------------------------------------------------
// const arr = [1, 2, 6, 9, 3, 4, 7, 8, 5];
// const newArr = arr.map(num => num + 2);
// const evenArr = arr.filter(num => num % 2 === 0);
// // arr.sort((num1, num2) => {
// //     if (num1 === num2) {
// //         return 0;
// //     }
// //     return num1 < num2 ? -1 : 1;
// // });
// arr.sort((num1, num2) => num1 - num2);
// const reduceArr = arr.reduce((data, num) => num % 2 !== 0 ? data + num : data, 0);
// console.log({
//     arr,
//     newArr,
//     evenArr,
//     reduceArr,
// });

// ---------------------------------------------------------
/*
Напишите функцию cakes(recipe, ingredients), которая принимает рецепт (объект)
и доступные ингредиенты (также объект) и возвращает максимальное количество
пирожных, которое можно испечь (целое число). Для простоты не существует единиц
измерения количества (например, 1 фунт муки или 200 г сахара - это просто 1 или
200). Ингредиенты, которых нет в предметах, можно рассматривать как 0.
*/

// function cakes(recipe, ingredients) {
//     const counts = [];
//     for (const key in recipe) {
//         if (!ingredients[key]) {
//             return 0;
//         }
//         counts.push(Math.floor(ingredients[key] / recipe[key]));
//     }
//     return Math.min(...counts);
// }
//
// console.log(cakes(
//     {flour: 500, sugar: 200, eggs: 1},
//     {flour: 1200, sugar: 1200, eggs: 5, milk: 200})
// ); // 2
//
// console.log(cakes(
//     {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},
//     {sugar: 500, flour: 2000, milk: 2000})
// ); // 0

// ---------------------------------------------------------
// Функция func принимает массив чисел, необходимо реализовать функцию так, чтобы
// она вернула количество элементов переданного массива, которые отличны от
// наибольшего элемента не более чем на 10%.

function func(arr) {
    const max = Math.max(...arr);
    const min = Math.ceil(max * 0.9);
    return arr.filter(el => el < max && el > min).length;
}

console.log(func([5, 88, 95, 100, 77, 21, 92])); // [95, 92]
console.log(func([2, 13, 55, 29, 19, 5, -5])); // []