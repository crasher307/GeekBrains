import 'colors';

export default function (total, isGreen, count = 4) {
    const sumEl = String(total).split('.');
    const sumFull = `${[sumEl[0].padStart(count, ' '), sumEl[1].padEnd(2, '0')].join('.')} ₽`;
    console.log(`Общая стоимость покупок: ${isGreen ? sumFull.green : sumFull.red}`);
}