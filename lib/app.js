const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');

const chatRoom = new ChatRoom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    chatRoom.add(client);
    client.write(`Welcome, ${client.username}`);

    client.on('end', () => {
        // Is this testable?
        chatRoom.remove(client.username);
        chatRoom.all().forEach(c => c.write(`${client.username} has left the lobby.`))
    });

    client.on('data', data => {
        const command = parseMessage(data);
        console.log(command);
        if(command) {
            if(command.command === 'all') {
                const message = `${client.username}: ${command.text}`;
                chatRoom.all().forEach(c => c.write(message));
            }
            else if(command.command === 'nick') {
                chatRoom.all().forEach(c => c.write(`${client.username} has changed their name to ${command.arg}.`));
                chatRoom.rename(client.username, command.arg);
            }
            else if(command.command === 'dm') {
                const message = `${client.username} whispers: ${command.text}`;
                chatRoom.getClient(command.arg).write(message);
            }
        }
    });
});