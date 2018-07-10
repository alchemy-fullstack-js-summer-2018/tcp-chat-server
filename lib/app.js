const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');
const { random, all, nick, dm, game, guess } = require('./functions');
const wordList = require('./wordList');

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
    let gameInProgress = false;
    let secretWord = undefined;
    let actor = null;


    client.on('end', () => {
        chatRoom.remove(client.username);
        broadcast(`${client.username} has left the chat.`);
    });

    client.on('data', data => {
        const command = parseMessage(data);
        if(command) {
            fn[command.fn](chatRoom, command, client);
            // else if(command.fn === 'game') {
            //     broadcast(`🎉🎉🎉 ${client.username} has started Emoji Charades! 🎉🎉🎉`);
            //     gameInProgress === true;
            //     actor = random(chatRoom.all());
            //     secretWord = random(wordList);
            //     broadcast(`${actor.username} is the actor! They can only use emojis to have other players guess the secret word.`);
            //     actor.write(`\nThe secret word is: ${secretWord}`);
            // }
        }
    });
});