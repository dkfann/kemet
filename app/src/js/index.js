import Vue from 'vue';
import App from './components/App.vue';
import Siema from 'vue2-siema';

Vue.use(Siema);

const app = new Vue({
    el: '#root',
    render: h => h(App),
});
