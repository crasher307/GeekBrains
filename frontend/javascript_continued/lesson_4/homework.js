"use strict";

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать
// методы forEach и querySelectorAll и свойство classList у элементов.
document.querySelectorAll('.dropdown-item').forEach((el) => {
    el.classList.add('super-dropdown');
    console.log(el);
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо
// добавить, если такого класса у элемента не было.
const btn = document.querySelector('.btn');
console.log(btn.classList);
if (btn.classList.contains('btn-secondary')) {
    btn.classList.remove('btn-secondary');
} else {
    btn.classList.add('btn-secondary');
}
console.log(btn.classList);

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const menu = document.querySelector('.menu');
console.log(menu.classList);
menu.classList.remove('dropdown-menu');
console.log(menu.classList);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
//     `<a href="#">link</a>`
const divDD = document.querySelector('div.dropdown');
divDD.insertAdjacentHTML('afterend', '<a href="#">link</a>');
console.log(divDD.parentElement);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const ddMenuBtn = document.querySelector('#dropdownMenuButton');
console.log('id:', ddMenuBtn.id);
ddMenuBtn.setAttribute('id', 'superDropdown');
console.log('id:', ddMenuBtn.id);
console.log(ddMenuBtn);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный
// "dropdownMenuButton" используя dataset.
const ddMB = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
ddMB.dataset.dataDd = '3';
console.log(ddMB);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".
const ddt = document.querySelector('.dropdown-toggle');
console.log('type:', ddt.getAttribute('type'));
ddt.removeAttribute('type');
console.log('type:', ddt.getAttribute('type'));
console.log(ddt);