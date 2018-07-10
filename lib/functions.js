
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

function game(clients, command, client, charades) {
    broadcast(clients, `${client.username} has started Emoji Charades! 🎉🎉🎉`);
    charades.start(random(clients.all()).username);
    broadcast(clients, `${charades.actor} is the actor! They can only use emojis to have other players guess the secret word. Everyone else uses @guess to guess.`);
    clients.getClient(charades.actor).write(`\nThe secret word is: ${charades.secretWord}`);
}

function guess(clients, command, client, charades) {
    if(client.username !== charades.actor && command.text.toUpperCase() === charades.secretWord) {
        broadcast(clients, `${client.username} guessed the secret word: ${charades.secretWord}!`);
        charades.end();
    }
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