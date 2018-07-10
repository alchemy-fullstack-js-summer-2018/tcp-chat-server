const net = require('net');
const ChatRoom = require('./chatroom');
const processMessage = require('./processMessage');

const clients = new ChatRoom();

module.exports = net.createServer(client => {
    console.log('client connected');
    client.setEncoding('utf8');
    clients.add(client);

    
    client.on('data', data => {
        const message = `${client.username}: ${processMessage(data)}`;
        clients 
            .getBroadcastClients(client)
            .forEach(c => c.write(message));
    });

    client.on('end', () => {
        clients.remove(client);
    });
});
