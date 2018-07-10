const net = require('net');
const ChatRoom = require('./ChatRoom');

const chatRoom = new ChatRoom();

module.exports = net.createServer(client => {
    chatRoom.add(client);
    client.setEncoding('utf8');
    client.write(`${client.username}, has joined!`);

    client.on('end', () => {
        chatRoom.remove(client.username);
        chatRoom.all().forEach(c => c.write(`${client.username} has left the room!`));
    });
})