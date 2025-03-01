'use strict';

const counter = document.createElement('div');
counter.classList.add('counter');
// counter.innerHTML = `Просмотров: ${count}`;
document.body.appendChild(counter);

fetch('/counter.json')
    .then((response) => {
        response.json().then((data) => {
            counter.innerHTML = `Просмотров: ${data.find(e => e.url === document.location.pathname).views}`;
        });
    });