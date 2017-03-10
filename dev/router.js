import Vue from 'vue';
import VueRouter from 'vue-router';


// const LogIn = resolve => require(['./components/LogIn.vue'], resolve);
// const AddUser = resolve => require(['./components/AddUser.vue'], resolve);

import LogIn from './components/LogIn.vue';
import AddUser from './components/AddUser.vue';

Vue.use(VueRouter);

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.

        return savedPosition;
    }
    const position = {};
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
        position.selector = to.hash;
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0;
        position.y = 0;
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.

    return position;
};

const routes = [
    {
        path: '/',
        component: LogIn,
        meta: {
            scrollToTop: true,
        },
    },
    {
        path: '/addUser',
        component: AddUser,
        meta: {
            scrollToTop: true,
        },
    },
];

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    scrollBehavior,
    routes,
});

export default router;
