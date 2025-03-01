// Задание №4
// 1. Инициализируйте проект NPM.
// 2. Установите библиотеку express.
// 3. Создайте файл index.js.
// 4. В файле напишите код который реализует два обработчика по URL “/” и URL
// “/about”.
// 5. В каждом обработчике верните HTML код, в котором есть заголовок и ссылка
// на соседнюю страницу.

// Задание №5
// 1. Инициализируйте проект NPM.
// 2. Установите библиотеку express.
// 3. Создайте файл index.js.
// 4. Подключите промежуточный обработчик express.static().
// 5. В директории со статичными файлами создайте два HTML файла
// index.html и about.html и напишите в них HTML код в котором есть
// ссылки на соседние файлы.

// Задание №6
// 1. Создайте в директории со статичными файлами файл index.js с
// содержимым alert(“Привет, Мир!!!”);
// 2. В файлах index.html и about.html подключите скрипт с src=”index.js”
// 3. Создайте в директории со статичными файлами файл index.css со
// стилем, который изменяет цвет ссылки
// 4. В файлах index.html и about.html подключите css файл index.css с
// помощью тега <link/>
// 5. Запустите сервер и попробуйте открыть любую страницу

const express = require('express');
const app = express();

app.use(express.static('pages'));

// const pages = [
//     {url: '/', title: 'Index', body: 'Index page!'},
//     {url: '/about', title: 'About', body: 'About page!'},
// ];
// const menu = pages.map(page => `<a href="${page.url}">${page.title}</a>`).join(' - ');
// console.log(menu);

// pages.forEach(page => {
//     app.get(page.url, (req, res) => {
//         res.send(`<h1>${page.title}</h1>${menu}<div>${page.body}</div>`);
//     });
// });

app.listen(3000);