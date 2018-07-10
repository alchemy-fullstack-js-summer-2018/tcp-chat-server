const net = require('net');
const ChatRoom = require('./chatRoom');
const processMessage = require('./processMessage');

const chatRoom = new ChatRoom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    chatRoom.add(client);
    client.write('Welcome to the chat room ' + client.username + '!');

    client.on('data', data => {
        const message = processMessage(data);
        if(message.command === 'all') {
            chatRoom
                .all(client)
                .forEach(c => c.write(`${client.username}: ${message.text}`));
        }

        else if(message.command === 'dm') {
            chatRoom
                .getClient(message.arg)
                .write(message.text);
        }

        else if(message.command === 'nick') {
            chatRoom
                .rename(client.username, message.arg);
        }
    });
});
