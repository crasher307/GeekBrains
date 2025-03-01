/* eslint-disable */

import Vue from "vue";
import Router from "vue-router";

import PageHome from "@/components/pages/PageHome.vue";
import PageProject from "@/components/pages/PageProject.vue";
import PageBlog from "@/components/pages/PageBlog.vue";
import PageProjectView from "@/components/pages/PageProjectView.vue";
import Page404 from "@/components/pages/Page404.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: PageHome,
        },
        {
            path: '/project',
            name: 'Project',
            component: PageProject,
        },
        {
            path: '/blog',
            name: 'Blog',
            component: PageBlog,
        },
        {
            path: '/project-view/:id',
            name: 'ProjectView',
            component: PageProjectView,
        },
        {
            path: '/404',
            name: 'Error404',
            component: Page404,
        },
        {
            path: '*',
            redirect: '/404',
        },
    ],
});