const net = require('net');

const server = net.createServer(client => {
    console.log('client connected');
    client.setEncoding('utf8');

    client.write('hello client!');

    client.on('data', data => {
        console.log('client sending', data);
        client.write('well alright then');
    });

    client.on('end', () => {
        console.log('client ended');
    });
});