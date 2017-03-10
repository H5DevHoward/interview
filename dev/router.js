import Vue from 'vue';
import VueRouter from 'vue-router';


const LogIn = resolve => require(['./components/LogIn.vue'], resolve);
const AddUser = resolve => require(['./components/AddUser.vue'], resolve);

Vue.use(VueRouter);

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
    routes,
});

export default router;
