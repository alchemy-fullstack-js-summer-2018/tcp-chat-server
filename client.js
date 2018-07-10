const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const socket = net.connect(2500, () => {
    rl.setPrompt('');
    rl.prompt();

    rl.on('line', input => {
        socket.write(input);
    });

    socket.on('data', data => {
        console.log(data);
    });

    socket.on('close', () => {
        console.log('Server outta hereeeeee');
        socket.destroy();
    });
});

socket.setEncoding('utf8');