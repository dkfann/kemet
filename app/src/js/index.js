import io from 'socket.io-client';

console.log('In src/index.js');

const socket = io.connect();

socket.on('testing', (test) => {
    console.log(test);
})