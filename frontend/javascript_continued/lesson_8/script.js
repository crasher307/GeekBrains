const container = document.querySelector('.container');
const createEl = (el, innerHtml = null, type = null, name = null) => {
    const e = document.createElement(el);
    if (innerHtml) e.innerHTML = innerHtml;
    if (type) e.type = type;
    if (name) e.name = name;
    return e;
};
const containerAdd = (...el) => {
    el.forEach(e => container.appendChild(e));
};


// Задание 1 (тайминг 20 минут)
// 1. В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// 2. Добавить кнопку отправить
// 3. При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// 4. Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

const checkbox = createEl('input', null, 'checkbox');
const span1 = [
    createEl('span', 'Согласен с условиями'),
    createEl('span', 'Необходимо согласиться с условиями'),
];
const button1 = createEl('button', 'отправить');
containerAdd(checkbox, span1[0], button1);
button1.addEventListener('click', () => {
    if (!checkbox.checked) {
        containerAdd(span1[1]);
    }
});


// Задание 2 (тайминг 25 минут)
// 1. В html создать 2 элемента радио кнопки (input type=“radio”) и текст “Чай”, “Кофе” соответственно
// 2. Кнопка отправить
// 3. Если выбран чай, необходимо вывести сообщение “Чай закончился”
// 4. Если выбран кофе, необходимо вывести сообщение “кофе закончился”

const span2 = [
    createEl('span', 'Чай'),
    createEl('span', 'Кофе'),
];
const radio = [
    createEl('input', null, 'radio', 'drink'),
    createEl('input', null, 'radio', 'drink'),
];
const button2 = createEl('button', 'отправить');
containerAdd(radio[0], span2[0], radio[1], span2[1], button2);
button2.addEventListener('click', () => {
    for (const k in radio) {
        if (radio[k].checked) {
            alert(`${span2[k].innerHTML} закончился`);
        }
    }
});


// Задание 3 (тайминг 20 минут)
// 1. Создать поле ввода (пароль)
// 2. Кнопка отправить
// 3. Если пользователь вводит текст “пароль”, то поле ввода должно быть подсвечено зеленым цветом
// 4. Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

const pass = 'pass';
const input1 = createEl('input', '', 'text');
const button3 = createEl('button', 'отправить');
containerAdd(input1, button3);
button3.addEventListener('click', () => {
    const err = input1.value !== pass;
    input1.className = !err ? 'ok' : 'error';
    if (err) alert('пароль неверный');
});


// Задание 4 (тайминг 20 минут)
// 1. Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// 2. При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менялся на введенный в поле ввода

const input2 = createEl('input');
const h1 = createEl('h1', 'Заголовок');
containerAdd(input2, h1);
input2.addEventListener('input', (e) => {
    h1.innerHTML = e.target.value;
});