const setProps = (el, props = {},) => {
    Object.entries(props).forEach(e => el[e[0]] = e[1]);
};

const data = JSON.parse(dataProducts);
const productsBlock = document.querySelector('.products.catalog .pages');
const productsTpl = document.querySelector('#productTemplate .card');
const createProduct = (obj = {}) => {
    const product = productsTpl.cloneNode(true);
    Object.entries(obj).forEach(e => setProps(product.querySelector(e[0]), e[1]));
    return product;
};

const dataCart = JSON.parse(cartItems);
const cart = document.querySelector('.cart');
const cartBlock = document.querySelector('.cart .product-list');
const cartTpl = document.querySelector('#productTemplate .product');
const checkCart = () => {
    dataCart.length <= 0 ? cart.classList.add('hidden') : cart.classList.remove('hidden');
};
const addToCart = (obj = {}) => {
    dataCart.push(obj);
    const dc = dataCart.find(e => e === obj);
    dc.quantity = 0;

    dc.updateQuantity = (value) => {
        const v = Number.parseInt(value);
        quantity.value = v;
        dc.quantity = v;
    };
    dc.removeItem = () => {
        const idx = dataCart.indexOf(dc);
        if (idx > -1) {
            dc.obj.remove();
            dataCart.splice(idx, 1);
        }
        checkCart();
    };

    dc.obj = cartTpl.cloneNode(true);
    dc.obj.querySelector('.image img').src = dc.img;
    dc.obj.querySelector('.desc .title .name').innerHTML = dc.name;
    dc.obj.querySelector('.desc .title .type').innerHTML = dc.type;
    dc.obj.querySelector('.desc .props.price').innerHTML = dc.price;
    dc.obj.querySelector('.desc .props.color').innerHTML = dc.color;
    dc.obj.querySelector('.desc .props.size').innerHTML = dc.size;
    const quantity = dc.obj.querySelector('.desc .props.quantity input');
    quantity.addEventListener('input', (e) => dc.updateQuantity(e.target.value));
    const close = dc.obj.querySelector('.close');
    close.addEventListener('click', () => dc.removeItem());

    cartBlock.appendChild(dc.obj);
    checkCart();
    return dc;
};


data.forEach(obj => {
    const pr = createProduct({
        'img': {src: obj.img},
        '.desc .title': {innerHTML: obj.name},
        '.desc .text': {innerHTML: obj.desc},
        '.desc .price': {innerHTML: obj.price},
        'a.add': {
            href: '#',
            onclick: (e) => {
                e.preventDefault();
                let item = dataCart.find(e => e.img === obj.img);
                if (!item) {
                    item = addToCart(data.find(e => e.img === obj.img));
                }
                item.updateQuantity(item.quantity + 1);
            }
        },
        'a.title': {href: obj.link},
    });
    productsBlock.before(pr);
});
dataCart.forEach(data => cartBlock.appendChild(addToCart(data)));