const net = require('net');
const ChatRoom = require('./ChatRoom');
const parseMessage = require('./parseMessage');
const { random } = require('./functions');
const wordList = require('./wordList');

const chatRoom = new ChatRoom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    chatRoom.add(client);
    chatRoom.all().forEach(c => c.write(`${client.username} has joined the chat.`));
    let gameInProgress = false;
    let secretWord = undefined;
    let actor = null;

    const broadcast = (message) => {
        chatRoom.all().forEach(c => c.write(message));
    };

    client.on('end', () => {
        // Is this testable?
        chatRoom.remove(client.username);
        chatRoom.all().forEach(c => c.write(`${client.username} has left the chat.`));
    });

    client.on('data', data => {
        const command = parseMessage(data);
        if(command) {
            if(command.command === 'all') {
                const message = `${client.username}: ${command.text}`;
                broadcast(message);
                if(client !== actor && command.text.toUpperCase() === secretWord) {
                    broadcast(`${client.username} guessed the secret word: ${secretWord}!`);
                    gameInProgress === false;
                    actor = null;
                    secretWord = undefined;
                }
            }
            else if(command.command === 'nick') {
                broadcast(`${client.username} has changed their name to ${command.arg}.`);
                chatRoom.rename(client.username, command.arg);
            }
            else if(command.command === 'dm' && chatRoom.getClient(command.arg)) {
                const message = `${client.username} whispers: ${command.text}`;
                chatRoom.getClient(command.arg).write(message);
            }
            else if(command.command === 'game') {
                broadcast(`🎉🎉🎉 ${client.username} has started Emoji Charades! 🎉🎉🎉`);
                gameInProgress === true;
                actor = random(chatRoom.all());
                secretWord = random(wordList);
                actor.write(`You are the actor! You can only use emojis to have other players guess the word: ${secretWord}`);
            }
        }
    });
});