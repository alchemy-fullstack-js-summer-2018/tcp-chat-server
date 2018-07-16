const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const socket = net.connect(8080, () => {
    rl.setPrompt('');
    rl.prompt();

    rl.on('line', input => {
        socket.write(input);
    });

    socket.on('data', data => {
        console.log(data);
    });
});

socket.setEncoding('utf8');