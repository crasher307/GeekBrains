"use strict";

const url = 'https://www.boredapi.com/api/activity';

Request('GET', url)
    .then((resp) => {
        console.log(JSON.parse(resp.data));
    })
    .catch((resp) => {
        console.warn(resp.error);
    });

RequestTest(url).then((data) => {
    console.log(data);
});

async function Request(method, url, timeout = 2000) {
    const statuses = [
        {key: 'success', min: 200, max: 299},
        {key: 'redirect', min: 300, max: 399},
        {key: 'error', min: 400, max: 599},
        {key: 'unknown', min: 0, max: 999},
    ];
    const response = (request, resolve, reject) => {
        const status = statuses
            .map((e) => ({...e, name: `${e.key[0].toUpperCase()}${e.key.slice(1)}`,}))
            .find((e) => e.min <= request.status && request.status <= e.max);
        const obj = {
            code: request.status,
            status: status.key || 'unknown',
            data: request.response,
            error: status.key !== 'success' ? `${status.name} ${request.status}: ${request.statusText}` : null,
        };
        return status.key === 'success' ? resolve(obj) : reject(obj);
    }
    return await new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.timeout = timeout;
        request.onload = () => response(request, resolve, reject);
        request.onerror = () => response(request, resolve, reject);
        request.ontimeout = () => reject('Timeout exceeded');
        request.onabort = () => reject('Request aborted');
        request.open(method, url);
        request.send();
    });
}
async function RequestTest(url) {
    const response = await fetch(url);
    return await response.json();
}