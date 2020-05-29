import Vue from 'vue';
import App from '../App.vue';
import { truncate } from './utils/helpers';

Vue.filter('truncate', truncate);

new Vue({
    el: '#app',
    render: h => h(App)
});
