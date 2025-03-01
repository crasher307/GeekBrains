// Задание 1 (повторить то, что делали на семинаре)
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка заголовок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const createEl = (block, content, style = {}) => {
    const el = document.createElement(block);
    el.innerHTML = content;
    Object.entries(style).forEach(data => {
        el.style[data[0]] = data[1];
    });
    return el;
};
const createImg = (src, width, style = {}) => {
    const el = document.createElement('img');
    el.src = src;
    el.width = width;
    Object.entries(style).forEach(data => {
        el.style[data[0]] = data[1];
    });
    return el;
};
const getImgData = (data) => {
    const res = [];
    data.forEach(e => {
        res.push(e.header);
        res.push(e.image);
        res.push(e.desc);
    });
    return res;
};

const dataContent = JSON.parse(content);
const cont = document.querySelector('.container');

const images = dataContent.filter(el => el.id === 'image').map(el => {
    return {
        header: createEl('h2', el.title, { color: '#37b' }),
        image: createImg(el.url, el.width, { borderRadius: '10px' }),
        desc: createEl('p', el.desc, { color: '#888' }),
    };
});

[
    createEl('h1', dataContent.filter(el => el.id === 'header')[0].data),
    createEl('p', dataContent.filter(el => el.id === 'description')[0].data),
    ...getImgData(images),
].forEach(el => cont.appendChild(el));
