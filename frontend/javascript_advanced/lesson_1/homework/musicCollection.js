'use strict';
// Данные
const data = [
    {
        name: 'System of a Down',
        data: {
            1998: 'System of a Down',
            2001: 'Toxicity',
            2002: 'Steal This Album!',
            2005: ['Mezmerize', 'Hypnotize'],
        },
    },
    {
        name: 'Serj Tankian',
        data: {
            2007: 'Elect the Dead',
            2010: 'Imperfect Harmonies',
            2012: 'Harakiri',
        },
    }
];
// Музыкальная коллекция
const musicCollection = {
    albums: [],
    addAlbum(artist, title, year) {
        this.albums.push({title, artist, year});
    },
    [Symbol.iterator]: function () {
        let count = 0;
        return {
            next: () => count < this.albums.length
                ? {value: this.albums[count++], done: false}
                : {done: true},
        }
    },
};
// Заполнение
Object.values(data).forEach(artist => {
    Object.entries(artist.data).forEach(e => {
        const [year, album] = e;
        if (album instanceof Array) {
            album.forEach(album => musicCollection.addAlbum(artist.name, album, year));
        } else {
            musicCollection.addAlbum(artist.name, album, year);
        }
    });
});
// Вывод
for (const el of musicCollection) {
    console.log(`${el.title} - ${el.artist} (${el.year})`);
}