"use strict";

// Задание 1: "Управление библиотекой книг"
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    title;
    author;
    pages;

    constructor() {
        const rules = {
            title: {type: 'string', default: null},
            author: {type: 'string', default: null},
            pages: {type: 'number', default: 0},
        };
        const setProps = (r, p = null) => {
            if (typeof p !== r.type) {
                if (p !== null) {
                    console.error(new Error(`Book.${r} type != ${typeof r.type}`));
                }
                return r.default;
            }
            return p;
        };
        if (arguments.length === 0) {
            Object.keys(rules).forEach(key => this[key] = setProps(rules[key]));
        } else if (arguments.length === 1 && typeof arguments[0] === 'object') {
            Object.keys(rules).forEach(key => this[key] = setProps(rules[key], arguments[0][key]));
        } else {
            Object.keys(rules).forEach((key, idx) => this[key] = setProps(rules[key], arguments[idx]));
        }
    }

    displayInfo() {
        const names = ['Название', 'Автор', 'Страниц'];
        console.log(Object.values(this).map((e, idx) => `${names[idx]}: ${e}`).join('\n'));
    }
}

const book = new Book('название', 'автор', 50);
// const book = new Book();
// const book = new Book({title: 'название 2', author: 'автор 2', pages: 'test'});
book.displayInfo();

// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// Пример использования класса
// const student1 = new Student('John Smith', 16, '10th grade');
// student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade
// const student2 = new Student('Jane Doe', 17, '11th grade');
// student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade

class Student {
    name;
    age;
    grade;

    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        const st = Object.entries(this)
            .map(e => `${e[0][0].toUpperCase()}${e[0].slice(1)}: ${e[1]}`)
            .join('\n');
        console.log(st);
    }
}

const student1 = new Student('John Smith', 16, '10th grade');
student1.displayInfo();
const student2 = new Student('Jane Doe', 17, '11th grade');
student2.displayInfo();