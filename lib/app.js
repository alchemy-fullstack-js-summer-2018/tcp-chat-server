const net = require('net');

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    client.write('hi');

    client.on('data', data => {
        console.log(data);
    });
});