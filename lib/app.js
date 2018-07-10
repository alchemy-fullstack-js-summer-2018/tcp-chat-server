const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');
const { all, nick, dm, game, guess } = require('./functions');


const fn = {
    all: all,
    nick: nick,
    dm: dm,
    game: game,
    guess: guess
};

const chatRoom = new ChatRoom();

module.exports = net.createServer(client => {
    const broadcast = (message) => {
        chatRoom.all().forEach(c => c.write(message));
    };
    client.setEncoding('utf8');
    chatRoom.add(client);
    broadcast(`${client.username} has joined the chat.`);
    
    client.on('end', () => {
        chatRoom.remove(client.username);
        broadcast(`${client.username} has left the chat.`);
    });

    client.on('data', data => {
        const command = parseMessage(data);
        if(command && fn[command.fn]) {
            fn[command.fn](chatRoom, command, client);
        }
    });
});