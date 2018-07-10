const wordList = require('./wordList');

function broadcast(clients, message) {
    clients.all().forEach(c => c.write(message));
}

function all(clients, command, client) {
    const message = `${client.username}: ${command.text}`;
    broadcast(clients, message);
}

function nick(clients, command, client) {
    broadcast(clients, `${client.username} has changed their name to ${command.arg}.`);
    clients.rename(client.username, command.arg);
}

function dm(clients, command, client) {
    const target = clients.getClient(command.arg);
    if(target) {
        const message = `${client.username} whispers: ${command.text}`;
        clients.getClient(command.arg).write(message);
    }
}

function game() {
// else if(command.fn === 'game') {
            //     broadcast(`🎉🎉🎉 ${client.username} has started Emoji Charades! 🎉🎉🎉`);
            //     gameInProgress === true;
            //     actor = random(chatRoom.all());
            //     secretWord = random(wordList);
            //     broadcast(`${actor.username} is the actor! They can only use emojis to have other players guess the secret word.`);
            //     actor.write(`\nThe secret word is: ${secretWord}`);
            // }
}

function guess() {
// if(client !== actor && command.text.toUpperCase() === secretWord) {
    //     broadcast(`${client.username} guessed the secret word: ${secretWord}!`);
    //     gameInProgress === false;
    //     actor = null;
    //     secretWord = undefined;
    // }
}

function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}



module.exports = {
    random,
    all,
    nick,
    dm,
    game,
    guess
};