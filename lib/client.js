const readLine = require('readLine');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

rl.on('line', input => {
    console.log('received input:', input);
    rl.prompt();
});

setInterval(() => {
    console.log('test message');
}, 3000);