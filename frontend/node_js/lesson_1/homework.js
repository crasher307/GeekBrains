'use strict';

const libs = {
    http: require('http'),
    fs: require('fs'),
};

class Counter {
    __file = '';

    constructor(file) {
        this.__file = file;
    }

    async update(url, code) {
        // load
        let data = await this.__load();
        // update
        const page = data.find(e => e.url === url);
        if (!page) {
            data.push({code, views: 1, url});
        } else {
            page.code = code;
            page.views += 1;
        }
        // sort
        const srt = (arr) => arr.sort((a, b) => b.views - a.views);
        data = [
            ...srt(data.filter(e => e.code !== 200)),
            ...srt(data.filter(e => e.code === 200)),
        ];
        // save
        return await this.__save(data);
    }
    __load() {
        return new Promise((resolve) => {
            libs.fs
                .readFile(this.__file, 'utf8', (err, data) => {
                    resolve(!err ? JSON.parse(data) : []);
                });
        });
    }
    __save(data) {
        const json = JSON.stringify(data, null, 4);
        return new Promise((resolve) => {
            libs.fs
                .writeFile(this.__file, json, {flag: 'w+'}, (err) => {
                    resolve(!err);
                });
        });
    }
}

class Server {
    static __conf = {
        root: '', // root path
        mime: {
            html: 'text/html', // default
            css: 'text/css',
            js: 'text/javascript',
            json: 'application/json',
            svg: 'image/svg+xml',
            map: 'application/octet-stream',
        },
        error: {
            file: 'error.html',
            html: '<span style="color: #904040">Error {{code}}: {{message}}</span>',
        },
        counter: {
            file: 'counter.json',
            obj: null,
        },
    };

    static start(rootPath, port = 3000) {
        console.clear();
        this.__conf.root = rootPath.replace(/\/+$/g, '');
        this.__conf.counter.obj = new Counter(`${this.__conf.root}/${this.__conf.counter.file}`);
        this.__loadFile(this.__conf.error.file)
            .then((data) => this.__conf.error.html = data.data);
        libs.http
            .createServer(this.__handler)
            .listen(port, () => console.log(`Сервер запущен на порту ${port}`));
    }

    /** Обработчики */
    static __handler = (req, res) => Server.__loadPage(res, req.url);
    static __counter = (url, code) => Server.__conf.counter.obj.update(url, code);

    /** Загрузка страницы */
    static async __loadPage(res, url) {
        const data = await this.__loadFile(url);
        if (data.error) {
            data.data = this.__conf.error.html
                .replaceAll('{{code}}', data.code)
                .replaceAll('{{message}}', data.error);
        }
        res.writeHead(data.code, {
            'Content-Type': `${data.mime}; charset=utf-8`,
            'Content-Language': `ru`,
            'Cache-Control': `private`,
        });
        res.end(data.data);
        if (data.mime === this.__conf.mime.html) {
            this.__counter(url, data.code);
        }
    }

    /** Загрузка файла */
    static __loadFile(url) {
        const addr = `${url}`.replace(/^\/+/g, '').split('/');
        let file = addr.pop().split('.');
        let ext = file.length > 1 ? file.pop() : 'html';

        file = file.join('.') || 'index';
        (file === 'favicon') && (ext = 'svg');

        const address = [this.__conf.root, ...addr, `${file}.${ext}`].filter(e => e.length).join('/');

        return new Promise((resolve) => {
            libs.fs
                .readFile(address, 'utf8', (err, data) => {
                    resolve({
                        code: !err ? 200 : 404,
                        mime: !err ? (this.__conf.mime[ext] || this.__conf.mime.html) : this.__conf.mime.html,
                        data: !err ? data : '',
                        error: !err ? false : 'Page not found!',
                    })
                });
        });
    }
}

Server.start('./web/');