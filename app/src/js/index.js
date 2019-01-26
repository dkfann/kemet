import io from 'socket.io-client';
import Vue from 'vue';
import App from './components/App.vue';
import VueSocketIO from 'vue-socket.io';

console.log('In src/index.js');

// const socket = io.connect();

// socket.on('testing', (test) => {
//     console.log(test);
// });

// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://localhost:8000',
// }));

const app = new Vue({
    el: '#root',
    render: h => h(App),
    // sockets: {
    //     connect() {
    //         console.log('socket connected');
    //     },
    // },
});