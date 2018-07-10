const net = require('net');
const Chatroom = require('./chatroom');

const chatroom = new Chatroom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    chatroom.add(client);
    console.log('Someone has connected!');

    client.on('data', data => {
        const message = `${client.userName}: ${data}`;
        chatroom.getBroadcastClients(client)
            .forEach(client => client.write(message));
    });
    client.on('end', () => {
        //this piece isn't written yet
        console.log('client has disconnected');
        chatroom.remove(client);
    });

});