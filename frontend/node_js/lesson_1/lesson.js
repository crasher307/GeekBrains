// const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sum = numArray.reduce((acc, num) => acc += num, 0);
// console.log(`Рез-т сложения чисел массива: ${sum}`);

// HTTP server
const http = require('http');
const server = http.createServer((req, res) => {
    const viewContent = (code, body) => {
        res.writeHead(code, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(body);
    };
    console.log(`Запрос получен: ${req.url}`);
    switch (req.url) {
        case '/':
            viewContent(200, 'Index page!');
            break;
        case '/about':
            viewContent(200, 'About page!');
            break;
        default:
            viewContent(404, 'Page not found!');
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});