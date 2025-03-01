// Задание 1 (тайминг 25 минут)
// 1. Поиск в интернете (бесплатные api примеры)
// 2. Найти любые данные, на произвольную тему
// 3. Установить расширение в браузер “JSON viewer”
// 4. Пример найденного json объекта

// Задание 2 (тайминг 15 минут)
// 1. Создать файл data.js
// 2. Создать переменную dataInfo
// 3. Добавить несколько данных в dataInfo

// Задание 3 (тайминг 30 минут)
// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных
const img = JSON.parse(dataInfo);
console.log(img);
const container = document.querySelector('.container');
const imgCreate = (e) => {
    const i = document.createElement('img');
    i.id = e.id;
    i.src = e.url;
    i.width = e.width;
    i.height = e.height;
    return i;
};
img.map((e) => {
    container.appendChild(imgCreate(e));
});

// Задание 4 (тайминг 20 минут)
// 1. Создать все необходимые заголовки, параграфы изображения (из данных json)
// 2. Добавить все содержимое в блок контент
// 3. Добавить стили при необходимости