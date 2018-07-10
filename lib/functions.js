const Charades = require('./Charades');

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

function game(clients, command, client) {
    broadcast(clients, `${client.username} has started Emoji Charades! 🎉🎉🎉`);
    const charades = new Charades();
    charades.start(random(clients.all()).username);

}

function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}



module.exports = {
    random,
    all,
    nick,
    dm,
    game
};