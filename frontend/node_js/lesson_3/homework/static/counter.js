'use strict';

class Counter {
    static __listeners = {};
    static __data = {
        sending: null,
        last: [],
        current: [],
    };
    static async __load() {
        if (!this.__data.sending) {
            this.__data.current = await (await fetch('/counter.json')).json() || [];
            if (JSON.stringify(this.__data.current) !== JSON.stringify(this.__data.last)) {
                Object.values(this.__listeners).forEach(event => event(this.__data.current));
                this.__data.last = this.__data.current;
            }
        }
    }
    static update() {
        clearTimeout(this.__data.sending);
        this.__data.sending = setTimeout(() => {
            this.__data.sending = null;
            this.__load();
        }, 100);
    }
    static addEvent(name, fn = (data) => {}) {
        this.__listeners[name] = fn;
        this.update();
    }
    static removeEvent(name) {
        delete this.__listeners[name];
    }
}

const counter = document.querySelector('.counter');
const currentCode = window.performance.getEntriesByType('navigation')[0].responseStatus;

if (currentCode === 200) {
    Counter.addEvent('viewCounter', (data) => {
        let views = data.find(e => e.url === document.location.pathname).views || 0;
        if (views >= 1000) {
            views = `${Math.round(views / 100) / 10}K`;
        }
        counter.innerHTML = String(views);
        counter.visibility = 'visible';
    });
}