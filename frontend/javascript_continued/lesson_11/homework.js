const setProps = (el, props = {},) => {
    Object.entries(props).forEach(e => el[e[0]] = e[1]);
};

// Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0
// В блоке Featured Items необходимо реализовать шаблон товаров.
// Для этого необходимо создать json формат данных по всем товарам.
// Из этого файла сформировать блок Featured Items.
// Всю вёрстку остальных частей реализовывать не нужно, если у вас она была сделана на html/css можно использовать, заново создавать не требуется.

const data = JSON.parse(dataProducts);
const listPages = document.querySelector('.products.catalog .pages');
// productList.after('Hello');
const productTemplate = document.querySelector('#productTemplate .card');
const createProduct = (data = {}) => {
    const product = productTemplate.cloneNode(true);
    Object.entries(data).forEach(e => setProps(product.querySelector(e[0]), e[1]));
    return product;
};
data.forEach(data => {
    const pr = createProduct({
        'img': {src: data.img},
        '.desc .title': {innerHTML: data.name},
        '.desc .text': {innerHTML: data.desc},
        '.desc .price': {innerHTML: data.price},
        'a': {href: data.link},
    });
    listPages.before(pr);
    console.log('add product', pr);
});