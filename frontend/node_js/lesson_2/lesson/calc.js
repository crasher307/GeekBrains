import NP from 'number-precision';

export default function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, pur) => NP.plus(acc, pur), 0);
    return NP.times(total, discount);
}