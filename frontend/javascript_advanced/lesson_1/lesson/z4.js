'use strict';
// Текст задания:
//     Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
//     Map будет использоваться для хранения соответствия между уроком и преподавателем.
//     Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.
// 1. Map: урок => преподаватель
let lessons = new Map();
lessons.set('Математика', 'Смирнов'); // "Математика", "Смирнов"
lessons.set('История', 'Иванова'); // "История", "Иванова"
// 2. Map: студент => Set уроков
const Ivanov = { name: 'Иван' };
const IvanovLessons = new Set(['Математика', 'История']);
let students = new Map();
students.set(Ivanov, IvanovLessons);
// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки Ивана: ${[...students.get(Ivanov)]}`); // Математика, История


// Test
const newStudent = (name, lessons = []) => ({
    name,
    lessons: new Set(lessons),
    addLesson: function (lessonName) {
        this.lessons.add(lessonName);
    },
    getLessons: function () {
        return Array.from(this.lessons);
    }
});
const st = newStudent('Иван', ['Математика', 'Информатика']);
console.log({
    st,
    'lessons': st.getLessons(),
});