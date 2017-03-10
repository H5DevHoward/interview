import 'babel-polyfill';
import Vue from 'vue';
import router from './router';
import store from './store';
import App from './components/App.vue';

import 'materialize-css/sass/materialize.scss';
import 'materialize-css/bin/jquery-2.1.1.min.js';
import 'materialize-css';

const app = new Vue({
    router,
    store,
    components: {
        App,
    },
}).$mount('app');
