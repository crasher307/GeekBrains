"use strict";

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const slEl = document.getElementById('super_link');
console.log(slEl);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const clEl = document.getElementsByClassName('card-link');
for (let el of clEl) {
    el.innerHTML = 'ссылка';
}

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cbEl = document.getElementsByClassName('card-body')[0];
const clArr = cbEl.getElementsByClassName('card-link');
console.log(clArr);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const dnEl = document.querySelectorAll('[data-number="50"]')[0];
console.log(dnEl);

// 5. Выведите содержимое тега title в консоль.
console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const ctEl = document.getElementsByClassName('card-title')[0];
console.log(ctEl.parentElement);

// 7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const paragraphEl = document.createElement('p');
paragraphEl.innerHTML = 'Привет';
const cardEl = document.getElementsByClassName('card')[0];
cardEl.children[0].prepend(paragraphEl);

// 8. Удалите тег h6 на странице.
document.getElementsByTagName('h6')[0].remove();