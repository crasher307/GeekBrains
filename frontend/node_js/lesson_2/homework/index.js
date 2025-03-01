'use strict';

export default class Pass {
    static __props = {
        mask: {
            N: (count) => this.__getString(count, this.__props.numbers), // N - цифра
            l: (count) => this.__getString(count, this.__props.alphabet), // l - буква
            L: (count) => this.__getString(count, this.__props.alphabet).toUpperCase(), // L - заглавная буква
            S: (count) => this.__getString(count, this.__props.symbols), // S - символ
        },
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        alphabet: [
            'a', 'b', 'c', 'd', 'e', 'f',
            'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r',
            's', 't', 'u', 'v', 'w', 'x',
            'y', 'z'
        ],
        symbols: [
            '~', '`', '!', '@', '#', '$',
            '%', '^', '&', '*', '(', ')',
            '_', '+', '-', '=', '{', '}',
            '[', ']', ':', '"', ';', '\'',
            '<', '>', '?', ',', '.', '/',
            '\\', '|'
        ],
    };

    // Base
    static __getString(count, arr) {
        let response = '';
        let symbols = [];
        for (let i = 0; i < count; i++) {
            if (symbols.length === 0) {
                symbols = [...arr];
            }
            const key = Math.round(Math.random() * (symbols.length - 1));
            const value = symbols.splice(key, 1);
            response = `${response}${value}`;
        }
        return String(response);
    }

    static create(mask = 'NlLllSLLLlll') {
        const response = [];
        let count = 1;
        let type = mask[0];
        for (let i = 1; i <= mask.length; i++) {
            if (type !== mask[i] || i === mask.length) {
                response.push({type, count});
                count = 1;
                type = mask[i];
            } else {
                count += 1;
            }
        }
        return response.map(e => this.__props.mask[e.type](e.count)).join('');
    }
}