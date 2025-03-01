const createEl = (e, props = {}, classList = []) => {
    const el = document.createElement(e);
    Object.entries(props).forEach(v => el[v[0]] = v[1]);
    classList.forEach(v => el.classList.add(v));
    return el;
};

const player = document.querySelector('.player');
const config = {
    video: player.dataset.src || 'video.mp4',
    volume: {
        min: 0,
        max: 100,
        step: 5,
        value: 30,
        f: (value) => Math.round(value / config.volume.max * 10) / 10,
    },
};

const obj = {
    video: {
        obj: createEl('video', {src: config.video, volume: config.volume.f(config.volume.value)}, ['video']),
        events: {
            click: () => obj.video.obj.paused ? obj.video.obj.play() : obj.video.obj.pause(),
            play: () => {
                obj.centerPlay.obj.classList.add('hidden');
                obj.pause.obj.classList.remove('hidden');
                obj.play.obj.classList.add('hidden');
            },
            pause: () => {
                obj.centerPlay.obj.classList.remove('hidden');
                obj.play.obj.classList.remove('hidden');
                obj.pause.obj.classList.add('hidden');
            },
        },
    },
    panel: {
        obj: createEl('div', {}, ['panel']),
    },
    centerPlay: {
        obj: createEl('div', {}, ['btn', 'center', 'play']),
        events: {
            click: () => obj.video.obj.play(),
        },
    },
    play: {
        obj: createEl('div', {}, ['btn', 'play']),
        pos: 'panel',
        events: {
            click: () => obj.video.obj.play(),
        },
    },
    pause: {
        obj: createEl('div', {}, ['btn', 'pause', 'hidden']),
        pos: 'panel',
        events: {
            click: () => obj.video.obj.pause(),
        },
    },
    volume: {
        obj: createEl('input', {
            type: 'range',
            min: config.volume.min,
            max: config.volume.max,
            step: config.volume.step,
            value: config.volume.value,
        }, ['volume']),
        pos: 'panel',
        events: {
            input: (e) => obj.video.obj.volume = config.volume.f(e.target.value),
        },
    },
};
Object.keys(obj).forEach(key => {
    const pos = obj[key].pos || 'player';
    if (obj[key].events) {
        Object.entries(obj[key].events).forEach(e => obj[key].obj.addEventListener(e[0], e[1]));
    }
    switch (pos) {
        default:
            player.appendChild(obj[key].obj);
            break;
        case 'panel':
            obj.panel.obj.appendChild(obj[key].obj);
            break;
    }
});