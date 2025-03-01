/* eslint-disable */

import Vue from "vue";
import Vuex from "vuex";

import PageHome from "@/components/pages/PageHome.vue";
import PageProject from "@/components/pages/PageProject.vue";
import PageBlog from "@/components/pages/PageBlog.vue";
import PageProjectView from "@/components/pages/PageProjectView.vue";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // начальное состояние
        currentPage: PageHome,
        listPages: {
            home: {name: 'Home', comp: PageHome},
            project: {name: 'Project', comp: PageProject},
            blog: {name: 'Blog', comp: PageBlog},
        },
        currentProject: {
            category: 'Category',
            image: '/images/project/Image-1.png',
            title: 'Title',
            desc: 'Group / Category',
            data: [
                'Test description 1',
                'Test description 2',
            ],
            images: [
                '/images/projectView/Image.png',
                '/images/projectView/Image.png',
                '/images/projectView/Image.png',
            ],
        },
        projects: [
            {
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
                category: 'Kitchan',
                image: '/images/project/Image-2.png',
                title: 'Test Kitchan',
                desc: '',
            },
            {
                category: 'Living Area',
                image: '/images/project/Image-3.png',
                title: 'Test Living Area',
                desc: '',
            },
        ],
    },
    mutations: {
        // методы для изменения
        currentPage(state, data) {
            state.currentPage = state.listPages[data].comp;
            window.scrollTo({top: 0});
        },
        openProject(state, data) {
            state.currentProject = data;
            state.currentPage = PageProjectView;
            window.scrollTo({top: 0});
        },
    },
    actions: {
        // методы для асинхронных операций
        openProject(context, data) {
            context.commit('openProject', data);
        },
    },
    getters: {
        // методы для чтения состояния
        currentPage: state => state.currentPage,
        listPages: state => state.listPages,
        currentProject: state => state.currentProject,
        projects: state => state.projects,
    },
    modules: {
        // модули Vuex для разделения хранилища на под-хранилища
    },
});