import calculateResultSum from './calc.js';
import view from './view.js';

const items = [
    {
        purchases: [12.1, 32.2, 43.1], // 78.66
        discount: 0.9,
    },
    {
        purchases: [12.1, 32.2], // 44.3
        discount: 1,
    },
];

items.forEach(e => {
    e.sum = calculateResultSum(e.purchases, e.discount);
    view(e.sum, e.sum <= 50);
})

// npm run start