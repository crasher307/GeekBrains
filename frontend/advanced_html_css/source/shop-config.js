const menuLinks = [
    {
        name: 'Man',
        link: '#',
        sub: [
            {name: 'Accessories', link: '#'},
            {name: 'Bags', link: '#'},
            {name: 'Denim', link: '#'},
            {name: 'T-Shirts', link: '#'},
        ],
    },
    {
        name: 'Woman',
        link: '#',
        sub: [
            {name: 'Accessories', link: '#'},
            {name: 'Jackets & Coats', link: '#'},
            {name: 'Polos', link: '#'},
            {name: 'T-Shirts', link: '#'},
            {name: 'Shirts', link: '#'},
        ],
    },
    {
        name: 'Kids',
        link: '#',
        sub: [
            {name: 'Accessories', link: '#'},
            {name: 'Jackets & Coats', link: '#'},
            {name: 'Polos', link: '#'},
            {name: 'T-Shirts', link: '#'},
            {name: 'Shirts', link: '#'},
            {name: 'Bags', link: '#'},
        ],
    },
];
const socialLinks = {
    facebook: '#',
    instagram: '#',
    pinterest: '#',
    twitter: '#',
};
const copyright = `© 2021-${new Date().getFullYear()}  Brand  All Rights Reserved.`;

const products = {
    'product-1': defaultProduct('product-1'),
    'product-2': defaultProduct('product-2'),
    'product-3': defaultProduct('product-3'),
    'product-4': defaultProduct('product-4'),
    'product-5': defaultProduct('product-5'),
    'product-6': defaultProduct('product-6'),
    'product-7': defaultProduct('product-7'),
    'product-8': defaultProduct('product-8'),
    'product-9': defaultProduct('product-9'),
    'product-10': defaultProduct('product-10'),
    'product-11': defaultProduct('product-11'),
    'product-12': defaultProduct('product-12'),
};

// --- Add content ---

let menu = document.getElementById('menuElements');
if (!menu) {
    menu = document.getElementById('menu');
    menu.innerHTML = menuHtml();
} else {
    menu.innerHTML = menuHtml(false);
}
document.getElementById('copyright').innerHTML = copyright;
document.getElementById('social').innerHTML = socialHtml();
productLoad();

// console.log(document.getElementsByClassName('card product'));

// --- Functions ---

function menuHtml(div = true) {
    const link = (data, isName) => `<a${isName ? ` class="name"` : ''} href="${data.link}">${data.name}</a>`;
    const category = (data) => `<div class="category">${data.join('')}</div>`;
    const menu = (data) => div ? `<div>${data.join('')}</div>` : `${data.join('')}`;

    return menu(menuLinks.reduce((data, el) => {
        const links = [link(el, true)];
        if (el.sub.length > 0) el.sub.forEach(sub => links.push(link(sub)));
        data.push(category(links));
        return data;
    }, []));
}

function socialHtml() {
    const icon = (data) => `<a class="${data}" href="${socialLinks[data]}" target="_blank"></a>`;

    const data = [];
    Object.keys(socialLinks).forEach(el => data.push(icon(el)));
    return data.join('');
}

function defaultProduct(image) {
    return {
        image: {
            src: `../source/products/${image}.png`,
            alt: image,
        },
        title: 'Ellery x m\'o capsule',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: '$52.00',
        link: '#',
    }
}

function productLoad() {
    const card = (image, desc) => `<div class="card">${[image, desc].join('')}</div>`;
    const image = (src, alt, link) => `<a href="${link}"><img src="${src}" alt="${alt}"></a>`;
    const desc = (title, desc, price, link) => `<div class="desc"><a class="title" href="${link}">${title}</a><span>${desc}</span><span class="price">${price}</span></div>`;

    const cards = document.getElementsByClassName('card product');
    Object.values(cards).forEach((el) => {
        const productId = el.getAttribute('data-product');
        const productData = products[productId];
        if (!productId || !productData) {
            return;
        }
        el.outerHTML = card(
            image(productData.image.src, productData.image.alt, productData.link),
            desc(productData.title, productData.desc, productData.price, productData.link)
        );
    });
}