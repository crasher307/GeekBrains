"use strict";

class User {
    static #list = [];
    id;
    username;
    name;
    phone;
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.name = data.name;
        this.phone = data.phone;
        User.#create(this);
    }
    static getList() {
        return User.#list.filter(e => e.obj !== null);
    }
    static #remove(id) {
        const user = User.#list.find(e => Number(e.id) === Number(id));
        user.obj.remove();
        user.obj = null;
    }
    static #create(obj) {
        console.log('@create');
        const usernameEl = User.#createBlock(obj.username);
        const nameEl = User.#createBlock(obj.name);
        const phoneEl = User.#createBlock(obj.phone);
        const removeEl = User.#createEl('button', {
            innerHTML: 'remove',
        }, {
            background: 'none',
            color: '#D23030',
            border: '1px solid #D23030',
            borderRadius: '5px',
        });

        removeEl.addEventListener('click', (e) => {
            User.#remove(e.currentTarget.parentElement.id.slice(5));
            console.log('USERS', User.getList());
        });

        obj.obj = User.#createEl('div', {
            id: `user-${obj.id}`,
        }, {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '600px',
            padding: '5px 10px',
        });
        [usernameEl, nameEl, phoneEl, removeEl].forEach(e => obj.obj.appendChild(e));


        document.body.append(obj.obj);
        User.#list.push(obj);
    }
    static #createBlock(value) {
        return User.#createEl('div', {
            innerHTML: `${value}`,
        }, {
            display: 'flex',
            minWidth: '200px',
        });
    }
    static #createEl(el, data = {}, style = {}) {
        const obj = document.createElement(el);
        Object.entries(data).forEach(e => obj[e[0]] = e[1]);
        Object.entries(style).forEach(e => obj.style[e[0]] = e[1]);
        return obj;
    }
}

class Request {
    #request = new XMLHttpRequest();
    #method;
    #url;
    #data;
    constructor(method, url) {
        this.#method = method;
        this.#url = url;
        this.#request.onload = () => this.#load();
        this.#request.onerror = () => this.#error('Request error');
        this.#request.ontimeout = () => this.#error('Timeout');
        // this.#request.onreadystatechange = () => {
        //     if (this.#request.readyState === 3) {
        //         // load
        //     } else if (this.#request.readyState === 4) {
        //         func
        //     }
        // };
        this.#request.open(this.#method, this.#url);
    }
    send(data = null) {
        this.#data = {
            status: null,
            data: null,
            error: null,
        };
        this.#request.send(data);
    }
    #load() {
        this.#data.status = this.#request.status;
        if (this.#data.status === 200) {
            this.#data.data = JSON.parse(this.#request.response);
            // USERS
            this.#data.data.forEach(e => new User(e));
        } else {
            this.#data.error = this.#request.statusText;
        }
    }
    #error(message) {
        console.error(message);
        this.#data.status = this.#request.status;
        this.#data.error = message;
    }
    getData() {
        return this.#data;
    }
}

const request = new Request('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();