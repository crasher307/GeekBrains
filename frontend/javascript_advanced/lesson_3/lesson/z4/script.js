'use strict';

// Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в систему, используя данные, сохраненные в LocalStorage.
// Приложение будет состоять из трёх основных страниц:
// 1. Страница регистрации:
//      1. Предлагает пользователю ввести логин и пароль.
//      2. После ввода данных, они сохраняются в LocalStorage.
//      3. Пользователь перенаправляется на страницу входа.
// 2. Страница входа:
//      1. Предлагает пользователю ввести логин и пароль.
//      2. Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется на страницу приветствия.
//      3. Если данные не совпадают, выводится сообщение об ошибке.
// 3. Страница приветствия:
//      1. Простое приветственное сообщение для авторизованного пользователя.
//      2. Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.

const localUsers = localStorage.getItem('users');
const users = localUsers ? JSON.parse(localUsers) : [];

window.onload = () => show('login');
document.addEventListener('click', (e) => {
    const el = e.target;
    let form = {};
    let data = {};
    switch (el.dataset.type) {
        case 'login':
            form = document.querySelector('.container.login');
            data = {
                username: form.querySelector('.username').value,
                password: form.querySelector('.password').value,
            };
            const user = users.find(e => e.username === data.username);
            if (!user || user.password !== data.password) {
                err('Неверный логин или пароль', form);
            } else {
                show('hello');
            }
            break;
        case 'signin':
            form = document.querySelector('.container.signin');
            data = {
                username: form.querySelector('.username').value,
                password: form.querySelector('.password').value,
                password2: form.querySelector('.passwordRepeat').value,
            };
            if (users.find(e => e.username === data.username)) {
                err('Пользователь уже существует', form);
            } else {
                const invalid = [
                    data.username.length < 2,
                    data.password.length < 8,
                    data.password !== data.password2,
                ].includes(true);
                if (invalid) {
                    err('Данные заполнены некорректно', form);
                } else {
                    users.push({username: data.username, password: data.password});
                    localStorage.setItem('users', JSON.stringify(users));
                    show('login');
                }
            }
            break;
        case 'exit':
            show('login');
            break;
        case 'form-login':
            show('login');
            break;
        case 'form-signin':
            show('signin');
            break;
    }
});
document.addEventListener('input', () => {
    err();
});

function show(page) {
    err();
    document.querySelectorAll('.container').forEach(e => {
        e.querySelectorAll('input').forEach(i => i.value = '');
        e.classList.add('hide');
    });
    document.querySelector(`.container.${page}`).classList.remove('hide');
}

function err(message = '', el = null) {
    if (el && message) {
        const err = el.querySelector('.errorMessage');
        if (err) {
            err.innerHTML = message;
            err.classList.remove('hide');
        }
    } else {
        document.querySelectorAll('.errorMessage').forEach(err => {
            err.innerHTML = '';
            err.classList.add('hide');
        });
    }
}