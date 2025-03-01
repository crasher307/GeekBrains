"use strict";

// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span.
// То есть при печати в input'е тег span также должен меняться.
document.querySelector('input#from').addEventListener('input', (e) => {
    e.target.nextElementSibling.innerHTML = e.target.value;
});

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.
document.querySelector('.messageBtn').addEventListener('click', () => {
    const message = document.querySelector('.message');
    message.classList.add('animate_animated', 'animate_fadeInLeftBig');
    message.style.visibility = 'visible';
});

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено,
// форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error
// незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное
// поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
const form = document.querySelector('form');
const fields = [ // Забираем все поля формы
    ...form.querySelectorAll('form input'),
    ...form.querySelectorAll('form select'),
    ...form.querySelectorAll('form textarea'),
];

const valid = (value) => {
    // Проверка значения
    return value.length !== 0;
};
const validate = (e) => {
    const el = e.target || e;
    const error = !valid(el.value);
    if (error) {
        el.classList.add('error');
    } else if (el.classList.contains('error')) {
        el.classList.remove('error');
    }
    return !error;
};
const validation = () => {
    let err = false;
    fields.forEach((e) => {
        if (!validate(e)) {
            err = true;
        }
    });
    return !err;
};

fields.forEach((e) => {
    e.addEventListener('input', validate);
    e.addEventListener('change', validate);
});
form.addEventListener('submit', (e) => {
    if (!validation()) {
        e.preventDefault();
    }
});