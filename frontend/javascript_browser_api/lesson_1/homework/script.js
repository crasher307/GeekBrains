'use strict';

const currentUser = prompt('Введите свое имя', 'username');
const lessonsRaw = JSON.stringify([
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
]);

let lessons = [];
const scheduleBlock = document.querySelector('.schedule');
const scheduleEl = document.querySelector('.template');

window.addEventListener('DOMContentLoaded', () => lessonsLoad());
scheduleBlock.addEventListener('click', ({target}) => {
    if (target.nodeName.toLowerCase() === 'button') {
        if (target.matches('.signUp')) {
            signUp(target.dataset.id);
        }
        if (target.matches('.cancel')) {
            cancel(target.dataset.id);
        }
    }
});

function getBtn(idRow, className, name, enabled = true) {
    return `<button data-id="${idRow}" class="${className}"${enabled ? '' : ' disabled'}>${name}</button>`;
}

function getItem(className, data = null) {
    const el = scheduleEl.querySelector(className).cloneNode(true);
    if (data) {
        el.innerHTML = data;
    }
    return el;
}

function addLine(data) {
    let signUp = true;
    let cancel = true;
    let currentPart = 0;
    if (data) {
        currentPart = Number(data.currentParticipants) + (data.users ? data.users.length : 0);

        cancel = data.users ? data.users.includes(currentUser) : false;
        signUp = (Number(data.maxParticipants) - currentPart) > 0 && !cancel;
    }
    const line = [
        getItem('.name', data?.name),
        getItem('.time', data?.time),
        getItem('.part', data ? `${currentPart} / ${data.maxParticipants}` : null),
        getItem('.signUp', data ? getBtn(data.id, 'signUp', 'Записаться', signUp) : null),
        getItem('.cancel', data ? getBtn(data.id, 'cancel', 'Отменить запись', cancel) : null),
    ];
    line.forEach(e => scheduleBlock.appendChild(e));
}

function lessonsLoad() {
    lessons = JSON.parse(localStorage.getItem('lessons')) || [];
    if (lessons.length === 0) {
        lessons = JSON.parse(lessonsRaw) || [];
    }
    lessonsUpdateDOM();
}

function getLessonById(id) {
    return lessons.find(e => Number(e.id) === Number(id));
}

function signUp(id) {
    const lesson = getLessonById(id);
    if (!lesson.users) {
        lesson.users = [];
    }
    lesson.users.push(currentUser);
    lessonsUpdateDOM();
}

function cancel(id) {
    const lesson = getLessonById(id);
    if (lesson.users) {
        const idx = lesson.users.findIndex(e => e === currentUser);
        if (idx >= 0) {
            lesson.users.splice(idx, 1);
        }
        lessonsUpdateDOM();
    }
}

function lessonsUpdateDOM() {
    localStorage.setItem('lessons', JSON.stringify(lessons)); // save
    // update DOM
    scheduleBlock.innerHTML = '';
    // scheduleBlock.querySelectorAll('div').forEach(e => e.remove());
    addLine();
    lessons.forEach(data => addLine(data));
}