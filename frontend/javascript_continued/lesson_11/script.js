const setProps = (el, props = {},) => {
    Object.entries(props).forEach(e => el[e[0]] = e[1]);
};

// Задание 1 (тайминг 25 минут)
// 1. Дан макет https://www.figma.com/file/mZwLT9fKktsWuVyfQRoST1/shop-(Copy)-(Copy)?node-id=73%3A140 в котором
// представлены товары на странице корзины
// 2. Необходимо создать файл data.js с переменной dataProducts в которую присвоить JSON данные по товарам.
// 3. Вам нужно самостоятельно создать JSON данные (не забыть про кавычки для ключей и значений)
// 4. Добавить все данные из макета, чтобы в дальнейшим по ним мы смогли создать вёрстку
const data = JSON.parse(dataProducts);
console.log(data);

// Задание 2 (тайминг 30 минут)
// 1. Создаём вёрстку по данному макету
// 2. Добавляем все теги и стили для них, чтобы получилось один в один как в макете
// 3. Пока данные для шаблонизации использовать не нужно
const productList = document.querySelector('.cart .product-list');
const productTemplate = document.querySelector('#productTemplate .product');

// Задание 3 (тайминг 40 минут)
// 1. Создаём блоки с помощью javascript для этого используем данные из dataProducts
// 2. Формируем товары на основе нашей вёрстки
// 3. Проверяем, как будет выглядеть сайт, если в json данных, добавить еще один объект с товаром (в вёрстке должен
// появиться еще один блок, на основе этих данных)
const createProduct = (data = {}) => {
    const product = productTemplate.cloneNode(true);
    product.querySelector('.image img').src = data.img;
    product.querySelector('.desc .title .name').innerHTML = data.name;
    product.querySelector('.desc .title .type').innerHTML = data.type;
    product.querySelector('.desc .props.price').innerHTML = data.price;
    product.querySelector('.desc .props.color').innerHTML = data.color;
    product.querySelector('.desc .props.size').innerHTML = data.size;
    product.querySelector('.desc .props.quantity input').value = data.quantity;
    return product;
};
data.forEach(data => productList.appendChild(createProduct(data)));