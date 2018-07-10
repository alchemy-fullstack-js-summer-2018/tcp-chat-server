const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatRoom = new ChatRoom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    chatRoom.add(client);

    client.on('end', () => {
        chatRoom.remove(client);
    });

    client.on('data', data => {
        const message = `${client.username}: ${parseMessage(data)}`;
        chatRoom
            .getBroadcast(client)
            .forEach(c => c.write(message));
    });
});