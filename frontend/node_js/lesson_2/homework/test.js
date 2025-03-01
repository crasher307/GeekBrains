'use strict';

import Pass from "./index.js";

const mask = 'NNNSNlLLSNll';
const maskLen = mask.length;

for (let i = 0; i < 10; i++) {
    const pass = Pass.create(mask);
    console.log(`${pass} [mask: ${maskLen}, pass: ${pass.length}, ${maskLen === pass.length ? '' : 'не '}корректно]`);
}