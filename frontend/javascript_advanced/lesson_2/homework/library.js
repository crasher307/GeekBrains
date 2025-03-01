'use strict';
class Library {
    #books = [];
    constructor(books = []) {
        books.forEach(e => {
            if (this.#books.includes(e)) {
                throw new Error(`Duplicate ${e} book not allowed.`);
            }
            this.#books.push(e);
        });
    }
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Book ${title} already exists.`);
        }
        this.#books.push(title);
    }
    removeBook(title) {
        const idx = this.#books.indexOf(title);
        if (idx > -1) {
            throw new Error(`Book ${title} does not exist.`);
        }
        this.#books.slice(idx, 1);
    }
    hasBook(title) {
        return this.#books.includes(title);
    }
    get allBooks() {
        return this.#books;
    }
}

const lib = new Library(['test1', 'test2', 'test3']);

const fn = {
    listStart: () => [...lib.allBooks],
    addError: () => lib.addBook('test1'),
    addOk: () => lib.addBook('test4'),
    removeError: () => lib.removeBook('test5'),
    removeOk: () => lib.removeBook('test4'),
    hasError: () => lib.hasBook('test5'),
    hasOk: () => lib.hasBook('test1'),
    listEnd: () => [...lib.allBooks],
};

const result = {};
Object.entries(fn).forEach(e => {
    const [key, f] = e;
    try {
        result[key] = f();
    } catch (err) {
        result[key] = err.message;
    }
});
console.log(result);