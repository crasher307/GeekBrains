'use strict';

const libs = {
    express: require('express'),
    fs: require('fs'),
    path: require('path'),
};

class Server {
    static conf = {
        staticPath: 'static',
        lang: 'ru',
        templates: {
            main: {
                file: 'main.html',
                body: '{main_header}<hr>{main_content}<hr>{main_footer}',
            },
            error: {
                file: 'error.html',
                body: 'Error {error_code}: {error_message}',
            },
            header: {
                file: 'header.html',
                body: '{main_menu}',
            },
            footer: {
                file: 'footer.html',
                body: 'by crasher307',
            },
            menu: {
                func: [this.__getMenu, 'conf.router'],
                body: '<a href="/">Главная</a>',
            },
        },
        router: [
            {
                name: 'Главная',
                url: ['/', '/index'],
                file: 'index.html',
                desc: 'Test description',
                keys: ['test', 'keywords'],
            },
            {
                name: 'О нас',
                url: '/about',
                file: 'about.html',
            },
            {
                name: 'Список запросов',
                url: '/info',
                file: 'info.html',
            },
        ],
    };
    static app;

    static start(port = 3000) {
        this.app = libs.express();
        this.app.use(libs.express.static(this.conf.staticPath));
        this.__setTemplates();
        this.app.all('*', (req, res) => this.__handler(req, res));
        this.app.listen(port, () => {
            console.clear();
            console.log(`Server started: http://localhost:${port}`);
        });
    }
    // Pages
    static __getPage(url) {
        const router = this.conf.router;
        const route = router.find(e => this.__checkUrl(url, e.url));
        const content = route ? this.__getFile('pages', route.file) : null;
        const response = {
            code: content ? 200 : 404,
            data: content
                ? this.__getContent(content, route)
                : this.__getContent(
                    this.conf.templates.error.body
                        .replaceAll('{error_code}', '404')
                        .replaceAll('{error_message}', 'Page not found!'),
                    {
                        name: 'Page not found',
                        url: '/error404',
                    },
                ),
        };
        this.__updateCounter(url, response.code);
        return response;
    }
    static __getContent(content, route = {}) {
        const replace = {
            header_lang: this.conf.lang,
            header_title: route.name || '',
            header_description: route.desc || '',
            header_keywords: route.keys ? (typeof route.keys === 'string' ? route.keys : route.keys.join(', ')) : '',
            header_canonical: route.url ? (typeof route.url === 'string' ? route.url : route.url[0]) : '',
            main_header: this.conf.templates.header.body || '',
            main_menu: this.conf.templates.menu.body || '',
            main_content: content || '',
            main_footer: this.conf.templates.footer.body || '',
        };
        if (replace.main_menu) {
            replace.main_menu = replace.main_menu.replaceAll(
                new RegExp('<a.*href="' + replace.header_canonical + '"', 'gim'),
                `$& current`
            );
        }
        if (replace.main_header) {
            replace.main_header = `\n\n${replace.main_header}\n\n`;
        }
        if (replace.main_content) {
            replace.main_content = `\n\n${replace.main_content}\n\n`;
        }
        if (replace.main_footer) {
            replace.main_footer = `\n\n${replace.main_footer}\n\n`;
        }
        let response = this.conf.templates.main.body;
        Object.entries(replace).forEach(e => {
            response = response.replaceAll(`{${e[0]}}`, String(e[1]));
        });
        return response;
    }
    static __checkUrl(current, router) {
        return typeof router === 'string' && current === router || router.includes(current);
    }
    // Counter
    static __updateCounter(url, code) {
        const file = [this.conf.staticPath, 'counter.json'];
        const data = JSON.parse(this.__getFile(...file)) || [];
        const link = data.find(e => e.url === url);
        if (link) {
            link.code = code;
            link.views += 1;
        } else {
            data.push({url, code, views: 1});
        }
        // sort
        const srt = (arr) => arr.sort((a, b) => b.views - a.views);
        const json = JSON.stringify([
            ...srt(data.filter(e => e.code !== 200)),
            ...srt(data.filter(e => e.code === 200)),
        ], null, 4);
        this.__setFile(json, 'w+', ...file);
    }
    // Templates
    static __setTemplates() {
        Object.entries(this.conf.templates).forEach(e => {
            const [name, data] = e;
            let template;
            if (data.file) {
                template = this.__getFile('templates', data.file);
            } else if (data.func) {
                if (typeof data.func === 'function') {
                    template = data.func();
                } else {
                    const [func, ...props] = data.func;
                    const getProp = (obj, name = []) => {
                        const key = name.length ? name.shift() : null;
                        return key ? getProp(obj[key], name) : obj;
                    };
                    Object.entries(props).forEach(e => {
                        props[e[0]] = getProp(this, e[1].split('.'));
                    });
                    if (typeof func === 'function') {
                        template = func(...props);
                    }
                }
            }
            if (template) {
                this.conf.templates[name].body = template;
            }
        });
    }
    static __getMenu(router) {
        const menu = [];
        Object.values(router).forEach(route => {
            menu.push({
                href: typeof route.url === 'string' ? route.url : route.url[0],
                name: route.name,
            });
        });
        return menu.map(e => `<a href="${e.href}">${e.name}</a>`).join('');
    }
    // Services
    static __handler(req, res) {
        const page = this.__getPage(req.url);
        res.writeHead(page.code, {
            'Content-Type': `text/html; charset=utf-8`,
            'Content-Language': `ru`,
            'Cache-Control': `private`,
        });
        res.end(page.data);
    }
    static __getFile(...address) {
        try {
            return libs.fs.readFileSync(
                libs.path.join(__dirname, ...address),
                'utf8'
            );
        } catch (e) {
            //
        }
        return null;
    }
    static __setFile(content, mode, ...address) {
        libs.fs.writeFile(libs.path.join(__dirname, ...address), content, {flag: mode}, (e) => {
            console.log('Error', e);
        });
    }
}

Server.start(3000);