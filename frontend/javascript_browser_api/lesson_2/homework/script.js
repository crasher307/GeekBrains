'use strict';

const timer = {
    start: null,
    change: null,
};
const sliderEl = document.querySelector('.slider');
const images = Array.from(sliderEl.querySelectorAll('.images img'));
const pointersEl = sliderEl.querySelector('.pointers');
const pointers = [];

// start
images.forEach(e => e.classList.add('hide'));
images.forEach((e, idx) => {
    const el = document.createElement('div');
    el.classList.add('point');
    el.dataset.id = idx;
    pointers.push(el);
    pointersEl.appendChild(el);
});
setSlide(0);
start();

// handler
sliderEl.addEventListener('click', ({target}) => {
    !target.matches('.prev') || click('prev');
    !target.matches('.next') || click('next');
    !target.matches('.point') || click('point', target.dataset.id);
});

// functions
function getCurrentIdx() {
    return images.findIndex(e => !e.classList.contains('hide'));
}

function setSlide(idx) {
    const currenIdx = getCurrentIdx();
    let nextIdx = idx;
    if (nextIdx < 0) {
        nextIdx = images.length - 1;
    } else if (nextIdx >= images.length) {
        nextIdx = 0;
    }
    // hide
    if (currenIdx >= 0) {
        images[currenIdx].classList.add('hide');
        pointers[currenIdx].classList.remove('active');
    }
    // view
    images[nextIdx].classList.remove('hide');
    pointers[nextIdx].classList.add('active');
}

function click(type, idx = null) {
    switch (type) {
        case 'prev':
            setSlide(getCurrentIdx() - 1);
            break;
        case 'next':
            setSlide(getCurrentIdx() + 1);
            break;
        case 'point':
            setSlide(Number(idx));
            break;
    }
    start(5000);
}

function start(time = 100, period = 2000) {
    clearTimeout(timer.start);
    clearInterval(timer.change);
    timer.start = setTimeout(() => {
        timer.change = setInterval(() => {
            setSlide(getCurrentIdx() + 1);
        }, period);
    }, time);
}