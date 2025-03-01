// Задание №3
// 1. Создайте файл changePerson.js рядом с файлом writePerson.js
// 2. Напишите в нем код, который
// ➜ прочитает файл person.json,
// ➜ уменьшит возраст на 10
// ➜ изменит город на “Ekaterinburg”
// ➜ перезапишет исходный файл person.json
const fs = require('fs');
const path = require('path');

const person = JSON.parse(fs.readFileSync(path.join(__dirname, 'person.json'), 'utf8'));

person.age -= 10;
person.city = 'Ekaterinburg';

fs.writeFileSync(
    path.join(__dirname, 'person.json'),
    JSON.stringify(person, null, 4),
    {flag: 'w+'}
);