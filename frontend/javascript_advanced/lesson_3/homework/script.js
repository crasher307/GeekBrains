'use strict';

const feedsRaw = localStorage.getItem('feeds');
const feeds = feedsRaw ? JSON.parse(feedsRaw) : [
    // Test data
    {
        id: 3,
        product: 'test product',
        message: 'test message',
    },
    {
        id: 7,
        product: 'test product 2',
        message: 'test message 2',
    },
];

let selectedProduct = '';
const selectedEl = document.querySelector('#selectedProduct');

const feedEl = document.querySelector('.feedback');
const formEl = document.querySelector('.form');
const formElProduct = formEl.querySelector('#product');
const formElProductList = formEl.querySelector('datalist#products');
const formElMessage = formEl.querySelector('#message');
const formElButton = formEl.querySelector('button');

const validation = {
    product: () => formElProduct.value.length > 2,
    message: () => formElMessage.value.split(' ').length > 10,
};

window.addEventListener('load', () => {
    checkSend();
    updateProducts();
});
feedEl.addEventListener('click', (e) => {
    if (e.target.className.includes('remove')) {
        feedRemove(e.target.parentElement.dataset.id);
    }
});
formEl.addEventListener('input', () => checkSend());
formElButton.addEventListener('click', () => feedAdd(formElProduct.value, formElMessage.value));
selectedEl.addEventListener('change', (e) => feedsLoad(true, e.target.value));

function updateProducts(scroll = true) {
    const options = new Set(feeds.map(e => {
        return `<option${e.product === selectedProduct ? ' selected' : ''}>${e.product}</option>`;
    }));
    formElProductList.innerHTML = Array.from(options).join('');
    selectedEl.innerHTML = [
        `<option value="" ${selectedProduct.length === 0 ? 'selected' : ''}>Выберите продукт</option>`,
        ...Array.from(options)
    ].join('');
    feedsLoad(scroll);
}
function feedsLoad(scroll, product = null) {
    if (product !== null) {
        selectedProduct = product;
    }
    feeds.forEach(e => feedElRemove(e.id));
    if (selectedProduct.length > 0) {
        feeds.filter(e => e.product === selectedProduct).forEach(e => feedElAdd(e.id, e.product, e.message));
    }
    if (scroll) {
        scrollBottom();
    }
}

function feedAdd(product, message) {
    if (!checkSend()) {
        return;
    }
    const id = feeds.length ? Number(feeds[feeds.length - 1].id) + 1 : 0;
    feeds.push({id, product, message});
    feedsSave();
    updateProducts();
}
function feedElAdd(id, product, message) {
    const el = feedEl.querySelector('.container.hide').cloneNode(true);
    el.dataset.id = id;
    el.querySelector('.product').innerHTML = product;
    el.querySelector('.message').innerHTML = message;
    el.classList.remove('hide');
    feedEl.appendChild(el);
}
function feedRemove(id) {
    const elId = feeds.findIndex(e => Number(e.id) === Number(id));
    if (elId < 0) {
        return;
    }
    feeds.splice(elId, 1);
    feedsSave();
    feedElRemove(id);
    updateProducts(false);
}
function feedElRemove(id) {
    feedEl.querySelector(`.container[data-id="${id}"]`)?.remove();
}
function feedsSave() {
    localStorage.setItem('feeds', JSON.stringify(feeds));
}

function checkSend() {
    const valid = !Object.values(validation).map(f => f()).includes(false);
    formEl.querySelector('button').disabled = !valid;
    return valid;
}
function scrollBottom() {
    window.scrollTo({top: 9999999});
}