"use strict";

// 1. Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве,
// решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log('Math.min(...[1, 5, 7, 9])', Math.min(...arr));

// 2. Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и
// decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение
// счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
    let val = 0;
    return {
        get: () => val,
        increment: () => ++val,
        decrement: () => --val,
    }
};
const counter = createCounter();
console.log('counter = createCounter():', counter);
console.log('counter.increment():', counter.increment());
console.log('counter.increment():', counter.increment());
console.log('counter.decrement():', counter.decrement());
console.log('counter.get():', counter.get());

// 3. Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса
// в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример:
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

const findElementByClass = (el, className) => {
    let element = null;
    console.log('finding', className, Object.values(el.classList));
    if (Object.values(el.classList).includes(className)) {
        element = el;
    } else if (el.children.length > 0) {
        Object.values(el.children).find(e => element = findElementByClass(e, className));
    }
    return element;
};
const rootElement = document.querySelector('.container');
console.log('findElementByClass(container, \'target1\'):', findElementByClass(rootElement, 'target1'));
console.log('findElementByClass(container, \'target2\'):', findElementByClass(rootElement, 'target2'));