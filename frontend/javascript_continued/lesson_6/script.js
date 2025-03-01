// Задание 1 (тайминг 15 минут)
// 1. В html создать кнопку button
// 2. После загрузки страницы вывести в консоль текст “страница загрузилась”
// 3. Добавить событие onclick которое выводит в консоль текст “событие onclick”
// 4. Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
window.onload = () => {
    console.log('страница загрузилась');
};
document.querySelector('.btn').addEventListener('click', () => {
    console.log('событие onclick');
});


// Задание 2 (тайминг 30 минут)
// 1. Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// 2. Добавить клик на кнопку, чтобы в консоль выводилась именно та кнопка на которую мы нажали
// 3. Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку
// выводит в консоль
// 4. Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
let btn = [];
const func = (e) => {
    console.log(e.target);
};
for (let i = 1; i <= 5; i++) {
    btn[i] = document.querySelector(`.btn-${i}`);
}
for (let i = 1; i <= 3; i++) {
    btn[i].addEventListener('click', func);
}
let btnCounter = 0;
btn[4].addEventListener('click', () => {
    console.log(++btnCounter);
});
btn[5].addEventListener('click', (e) => {
    e.target.innerHTML = 'Вы нажали на эту кнопку';
});


// Задание 3 (тайминг 30 минут)
// 1. Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок”, данный элемент нужно расположить
// после кнопки
// 2. Создать вторую кнопку, которая будет удалять созданный заголовок h1
// 3. Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку”,
// как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
const cont = document.querySelector('.container');
const btnH1 = document.querySelector('.container .btn-h1');
btnH1.addEventListener('click', () => {
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Новый заголовок';
    cont.appendChild(h1);
});
const btnC2 = document.querySelector('.container .btn-c2');
btnC2.addEventListener('click', () => {
    const h1 = document.querySelectorAll('.container h1');
    if (h1.length > 0) {
        h1[h1.length - 1].remove();
    }
});
const btnC3 = document.querySelector('.container .btn-c3');
btnC3.addEventListener('mouseover', (e) => {
    e.target.innerHTML = 'Вы навели на данную кнопку';
})
btnC3.addEventListener('mouseout', (e) => {
    e.target.innerHTML = 'Наведения на кнопку больше нет';
})


// Задание 4 (тайминг 30 минут)
// 1. Создать в html список состоящий из 3-х произвольных элементов li
// 2. Нужно создать кнопку, которая будет добавлять элементы списка с текстом “новый элемент списка”
// 3. Создать кнопку, которая будет удалять первый элемент из созданного списка
// 4. Создать кнопку, при клике на которую ей добавляется класс “click”
const list = document.querySelector('.list ul');
const listBtn1 = document.querySelector('.list .btn-t1');
const listBtn2 = document.querySelector('.list .btn-t2');
const listBtn3 = document.querySelector('.list .btn-t3');
listBtn1.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerHTML = 'Новый элемент списка';
    list.appendChild(li);
});
listBtn2.addEventListener('click', () => {
    const li = document.querySelectorAll('.list ul li');
    if (li.length > 0) {
        li[0].remove();
    }
});
listBtn3.addEventListener('click', (e) => {
    e.target.classList.add('click');
});