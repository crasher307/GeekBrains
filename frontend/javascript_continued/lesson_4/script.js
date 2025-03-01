// Задание 1 (тайминг 25 минут)
// 1. Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
//   - Цвет текста синий
//   - Рамка сплошная черная
//   - Цвет фона #f8f8f8
//   - Внутренний отступ 16px
// 2. Добавить данному блоку класс item_1 (использовать setAttribute)

const block = document.querySelector('.block');
const item = document.createElement('div');
item.innerHTML = 'Элемент внутри';
item.setAttribute('class', 'item');
item.classList.add('item_1');
block.appendChild(item);


// Задание 2 (тайминг 25 минут)
// Необходимо с помощью querySelector найти параграф с классом text
// 1. Вывести в консоль соседний элемент h2
// 2. Вывести в консоль родительский элемент content
// 3. Вывести в консоль картинку
// 4. Вывести в консоль родительский элемент elem

const text = document.querySelector('.elem .content p.text');
console.log(text.previousElementSibling);
const content = text.parentElement;
console.log(content);
console.log(content.previousElementSibling);
let elem = text;
while (elem.parentElement && elem.parentElement.tagName.toLowerCase() !== 'body') {
    elem = elem.parentElement;
}
console.log(elem);


// Задание 3 (тайминг 20 минут)
// С помощью querySelector найти элемент h2 и вывести в консоль всех его родителей

let itemH2 = document.querySelector('h2.subtitle');
while (itemH2.parentElement) {
    itemH2 = itemH2.parentElement;
    console.log(itemH2);
}


// Задание 4 (тайминг 25 минут)
// 1. Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку
// отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили
// поле ввода
// 2. Цвет у рамки сделать красным

const err = document.createElement('h2');
err.style.color = '#f00';
err.innerHTML = 'Вы не заполнили поле ввода';
const form = document.querySelector('form');
const input = document.querySelector('form input[type=text]');
const button = document.querySelector('form button');

form.onsubmit = () => {
    const response = input.value !== '';
    const e = button.parentElement.querySelector(`${err.tagName}`);
    if (!response) {
        input.style.borderColor = '#f00';
        button.parentElement.appendChild(err);
    } else {
        input.style.borderColor = '#0f0';
        if (e) {
            e.remove();
        }
    }
    return response;
};


// Задание 5 (тайминг 20 минут)
// 1. Создайте с помощью javascript новый элемент button
// 2. Добавьте текст для кнопки “Отправить”
// 3. При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const delBtn = document.createElement('button');
delBtn.innerHTML = 'Delete H3';
button.parentElement.appendChild(delBtn);
let count = 0;
button.onclick = () => {
    if (input.value !== '') {
        const ok = document.createElement('h3');
        ok.innerHTML = `Текст отправлен ${++count}`;
        button.parentElement.appendChild(ok);
    }
};
delBtn.onclick = () => {
    const el = delBtn.parentElement.querySelector('h3');
    if (el) {
        el.remove();
    }
};