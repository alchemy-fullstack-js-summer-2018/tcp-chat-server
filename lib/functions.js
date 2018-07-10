function broadcast(clients, message) {
    clients.all().forEach(c => c.write(message));
}

function all(clients, command, client) {
    const message = `${client.username}: ${command.text}`;
    broadcast(clients, message);
    // if(client !== actor && command.text.toUpperCase() === secretWord) {
    //     broadcast(`${client.username} guessed the secret word: ${secretWord}!`);
    //     gameInProgress === false;
    //     actor = null;
    //     secretWord = undefined;
    // }
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

}

function guess() {

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