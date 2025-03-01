const pagesList = {
    main: {
        title: 'Главная',
    },
    registration: {
        title: 'Регистрация',
        breadcrumbs: 'Registration',
    },
    // profile: {
    //     title: 'Профиль',
    //     breadcrumbs: 'Profile',
    // },
    catalog: {
        title: 'Каталог',
        breadcrumbs: 'New arrivals',
    },
    product: {
        title: 'Товар',
        breadcrumbs: 'New arrivals',
    },
    cart: {
        title: 'Корзина',
        breadcrumbs: 'Shopping cart',
    },
    error: {
        title: '404: Страница не найдена',
    },
};
const categoriesList = [
    {
        id: 0,
        name: 'Man',
        sub: [
            {id: 0, name: 'Accessories'},
            {id: 1, name: 'Bags'},
            {id: 2, name: 'Denim'},
            {id: 3, name: 'T-Shirts'},
        ],
    },
    {
        id: 1,
        name: 'Woman',
        sub: [
            {id: 0, name: 'Accessories'},
            {id: 1, name: 'Jackets & Coats'},
            {id: 2, name: 'Polos'},
            {id: 3, name: 'T-Shirts'},
            {id: 4, name: 'Shirts'},
        ],
    },
    {
        id: 2,
        name: 'Kids',
        sub: [
            {id: 0, name: 'Accessories'},
            {id: 1, name: 'Jackets & Coats'},
            {id: 2, name: 'Polos'},
            {id: 3, name: 'T-Shirts'},
            {id: 4, name: 'Shirts'},
            {id: 5, name: 'Bags'},
        ],
    },
];
const productsList = [
    defaultProduct(0),
    defaultProduct(1),
    defaultProduct(2),
    defaultProduct(3),
    defaultProduct(4),
    defaultProduct(5),
    defaultProduct(6),
    defaultProduct(7),
    defaultProduct(8),
    defaultProduct(9),
    defaultProduct(10),
    defaultProduct(11),
];
const socialList = {
    facebook: '#',
    instagram: '#',
    pinterest: '#',
    twitter: '#',
};

function defaultProduct(id) {
    const image = `product-${id + 1}`;
    return {
        id,
        image: {
            src: `../source/products/${image}.png`,
            alt: image,
        },
        title: 'Ellery x m\'o capsule',
        desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
        price: `$${52 + id * 2}.00`,
        link: '#',
    }
}