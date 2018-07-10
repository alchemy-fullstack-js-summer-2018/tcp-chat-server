const net = require('net');
const ChatRoom = require('./chatRoom');

const chatRoom = new ChatRoom();

module.exports = net.createServer(client => {
    chatRoom.setEncoding('utf8');
    chatRoom.set(client);
});