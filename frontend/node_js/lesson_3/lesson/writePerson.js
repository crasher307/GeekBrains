// Задание №2
// 1. Создайте файл writePerson.js
// 2. Напишите код, который создаст файл person.json в директории запускаемого скрипта и запишет в файл следующий объект:
const person = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 30,
    city: 'Moscow',
};

const fs = require('fs');
const path = require('path');

fs.writeFileSync(
    path.join(__dirname, 'person.json'),
    JSON.stringify(person, null, 4),
    {flag: 'w+'}
);