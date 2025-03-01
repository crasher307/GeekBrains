/* eslint-disable */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listPages: {
            home: {name: 'Home', url: '/'},
            project: {name: 'Project', url: '/project'},
            blog: {name: 'Blog', url: '/blog'},
        },
        projects: [
            {
                id: 0,
                category: 'Bathroom',
                image: '/images/project/Image-1.png',
                title: 'Test Bathroom',
                desc: '',
                data: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                ],
                images: [
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                ],
            },
            {
                id: 1,
                category: 'Bed Room',
                image: '/images/project/Image-1.png',
                title: 'Minimal Bedroom',
                desc: 'Decor / Artchitecture',
                data: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                ],
                images: [
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                ],
            },
            {
                id: 2,
                category: 'Bed Room',
                image: '/images/project/Image-2.png',
                title: 'Minimal Bedroom',
                desc: 'Decor / Artchitecture',
                data: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                ],
                images: [
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                ],
            },
            {
                id: 3,
                category: 'Bed Room',
                image: '/images/project/Image-3.png',
                title: 'Classic Minimal Bedroom',
                desc: 'Decor / Artchitecture',
                data: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                ],
                images: [
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                ],
            },
            {
                id: 4,
                category: 'Bed Room',
                image: '/images/project/Image-4.png',
                title: 'Modern Bedroom',
                desc: 'Decor / Artchitecture',
                data: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                ],
                images: [
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                ],
            },
            {
                id: 5,
                category: 'Bed Room',
                image: '/images/project/Image-5.png',
                title: 'Minimal Bedroom table',
                desc: 'Decor / Artchitecture',
                data: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                ],
                images: [
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                ],
            },
            {
                id: 6,
                category: 'Bed Room',
                image: '/images/project/Image-6.png',
                title: 'System Table',
                desc: 'Decor / Artchitecture',
                data: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                ],
                images: [
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                ],
            },
            {
                id: 7,
                category: 'Bed Room',
                image: '/images/project/Image-7.png',
                title: 'Modern Bedroom',
                desc: 'Decor / Artchitecture',
                data: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                ],
                images: [
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                ],
            },
            {
                id: 8,
                category: 'Bed Room',
                image: '/images/project/Image-8.png',
                title: 'Modern Bedroom',
                desc: 'Decor / Artchitecture',
                data: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                    'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
                ],
                images: [
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                    '/images/projectView/Image.png',
                ],
            },
            {
                id: 9,
                category: 'Kitchan',
                image: '/images/project/Image-2.png',
                title: 'Test Kitchan',
                desc: '',
            },
            {
                id: 10,
                category: 'Living Area',
                image: '/images/project/Image-3.png',
                title: 'Test Living Area',
                desc: '',
            },
        ],
    },
    mutations: {
        // методы для изменения
    },
    actions: {
        // методы для асинхронных операций
    },
    getters: {
        // методы для чтения состояния
        listPages: state => state.listPages,
        projects: state => state.projects,
    },
    modules: {
        // модули Vuex для разделения хранилища на под-хранилища
    },
});