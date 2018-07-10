const net = require('net');
const parseMessage = require('parseMessage');

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    client.write('hi');

    client.on('data', data => {
        console.log(parseMessage(data));
    });
});