'use strict';

const uuid = require('uuid');

function hello() {
    console.log('Hello world!');
}

function test(...attr) {
    console.log(`Test: ${uuid.v4()}`);
    attr.forEach(e => console.log(e));
}

module.exports = {hello, test};