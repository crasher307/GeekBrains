'use strict';

import express from "express";
import path from "path";
import fs from "fs";
import joi from "joi";

const User = joi.object({
    id: joi.number().required(),
    username: joi.string().alphanum().min(2).required(),
    password: joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/i).required(),
});

class Server {
    static app;
    static usersFile = path.join('./users.json');

    static start(port = 3000) {
        this.app = express();
        this.app.use(express.json());
        this.app.all('/users*', (req, res) => this.__usersHandler(req, res));
        this.app.listen(port, () => {
            console.clear();
            console.log(`Server started: http://localhost:${port}`);
        });
    }

    static readFile(address) {
        try {
            return fs.readFileSync(address, 'utf8');
        } catch (e) {
            //
        }
        return null;
    }
    static writeFile(address, mode, data) {
        try {
            fs.writeFile(address, data, {flag: mode}, (e) => {
                throw new Error(e.message);
            });
            return true;
        } catch (e) {
            //
        }
        return false;
    }

    static decode(data) {
        return JSON.parse(data);
    }
    static encode(data) {
        return JSON.stringify(data, null, 4);
    }

    static __usersHandler(req, res) {
        const users = this.decode(this.readFile(this.usersFile)) || [];

        const url = req.url.split('/').splice(2); // query props
        const query = {id: url[0] ? Number(url[0]) : null, ...req.body};
        const response = {
            code: 200,
            data: null,
            error: null,
        };

        const save = (data) => {
            if (!this.writeFile(this.usersFile, 'w+', this.encode(data))) {
                throw 'Данные не обновлены';
            }
        };
        const validate = (data) => {
            const err = User.validate(data).error;
            if (err && err.details.length) {
                throw err.details[0].message;
            }
        };
        const findUser = () => {
            if (!query.id) {
                response.code = 500;
                throw 'Не передан id пользователя';
            }
            const tmp = Object.entries(users)
                .map(e => ({idx: e[0], id: e[1].id}))
                .find(e => e.id === query.id);
            if (!tmp) {
                response.code = 404;
                throw 'Пользователь не найден';
            }
            return {
                idx: Number(tmp.idx),
                obj: users[tmp.idx],
            };
        };

        switch (String(req.method).toLowerCase()) {
            case 'get':
                if (query.id) {
                    try {
                        response.data = findUser().obj;
                    } catch (err) {
                        response.error = err;
                    }
                } else {
                    response.data = users;
                }
                break;
            case 'post':
                query.id = users.length ? users[users.length - 1].id + 1 : 1;
                try {
                    validate(query);
                    users.push(query);
                    save(users);
                    response.data = 'Пользователь добавлен';
                } catch (err) {
                    response.error = err;
                }
                break;
            case 'put':
                try {
                    const user = findUser().obj;
                    Object.entries(query).forEach(e => user[e[0]] = e[1]);
                    validate(user);
                    save(users);
                    response.data = 'Пользователь обновлен';
                } catch (err) {
                    response.error = err;
                }
                break;
            case 'delete':
                try {
                    users.splice(findUser().idx, 1);
                    save(users);
                    response.data = 'Пользователь удален';
                } catch (err) {
                    response.error = err;
                }
                break;
        }
        res.writeHead(response.code, {'Content-Type': `application/json; charset=utf-8`});
        res.end(this.encode({data: response.data, error: response.error}));
    }
}

Server.start();