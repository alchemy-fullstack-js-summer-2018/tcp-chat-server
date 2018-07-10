const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatRoom = new ChatRoom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    chatRoom.add(client);

    client.on('data', data => {
        const message = parseMessage(data);
        if(message.command === 'all') {
            chatRoom
                .getBroadcast(client)
                .forEach(c => c.write(`${client.username}: ${message.text}`));
        }
        else if(message.command === 'dm') {
            chatRoom
                .getClient(message.arg)
                .write(`${client.username}: ${message.text}`);
        }
        else if(message.command === 'nick') {
            chatRoom.rename(client.username, message.arg);
        }
    });

    client.on('end', () => {
        chatRoom.remove(client);
    });
});