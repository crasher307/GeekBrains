// Задание 1 (тайминг 10 минут)
// 1. Получите  ссылку  на  первый  абзац  из  дива  с  id,  равным block,  выведите  его  в  консоль
// 2. Получите  ссылку  на  первый  абзац  с  классом  www.  и вывести  его  в  консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>

// const blockEl = document.getElementById('block');
// const paragraphEl = blockEl.getElementsByTagName('p');
// console.log(blockEl);
// console.log(paragraphEl[0].innerHTML);


// Задание 2 (тайминг 15 минут)
// 1. Дан тег  <a class="link" href="#">link text html</a>
//      a. Вам необходимо поменять текст внутри ссылки на “link text js”
//      b. Заменить href, на значение  https://developer.mozilla.org/ru/
// 2. Дан тег <img class="photo" src="" alt="">
//      a. Вам  необходимо  с  помощью  js  поменять  значение  src  на  любое изображение  из  интернета

// const linkEl = document.getElementsByClassName('link');
// linkEl[0].innerHTML = 'link text js';
// linkEl[0].href = 'https://developer.mozilla.org/ru/';
//
// const imageEl = document.getElementsByTagName('img');
// imageEl[0].src = 'https://a.d-cd.net/EcAAAgMNP2A-1920.jpg';


// Задание 3 (тайминг 20 минут)
// 1. Дан тег <div class="content"></div>
// 2. Создайте новый элемент p
// 3. Добавьте в него текст “Новый текстовый элемент”
// 4. Добавьте созданный элемент внутри <div class="content"></div>
// 5. Удалите добавленный узел

// const contentEl = document.getElementsByClassName('content')[0];
// const pEl = document.createElement('p');
// pEl.innerHTML = 'Новый текстовый элемент';
// contentEl.appendChild(pEl);
// pEl.remove();


// Задание 4 (тайминг 15 минут)
// 1. Создать элемент button, добавить в блок <div class="content"></div>
// 2. При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const contentEl = document.getElementsByClassName('content')[0];
// let count = 0;
// const buttonEl = document.createElement('button');
// buttonEl.innerHTML = 'Click me!';
// buttonEl.onclick = () => buttonEl.innerHTML = `Click me! ${++count}`;
// contentEl.appendChild(buttonEl);


// Задание 5 (тайминг 20 минут)
// 1. Дан тег <div class="content"></div>
// 2. Создайте с помощью javascript новый элемент button
// 3. Добавьте текст для кнопки “Отправить”
// 4. При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const contentEl = document.getElementsByClassName('content')[0];
// const buttonEl = document.createElement('button');
// buttonEl.innerHTML = '<b>Отправить</b>';
// buttonEl.onclick = () => buttonEl.innerHTML = 'Текст отправлен';
// contentEl.appendChild(buttonEl);


// #6
const contentEl = document.getElementsByClassName('content')[0];
const arr = ['list1', 'list2', 'list3'];
const ulEl = document.createElement('ul');
const liEl = (val) => {
    const el = document.createElement('li');
    el.innerHTML = val;
    return el;
};
for (let item of arr) {
    ulEl.appendChild(liEl(item));
}
contentEl.appendChild(ulEl);