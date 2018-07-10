const net = require('net');
const Clients = require('./Clients');
const { messageAll, changeUsername, directMessage } = require('./processMessage');

const clients = new Clients();

const server = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);

    client.on('end', () => {
        clients.remove(client);
    });

    client.on('data', data => {
        const message = `${client.username}: ${messageAll(data)}`;
        clients
            .getBroadcastClients(client)
            .forEach(c => c.write(message));
    });
});

module.exports = server;