const net = require('net');
const Clients = require('./clients');

const clients = new Clients();

module.exports = net.createServer(client => {
    console.log('client connected!');
    client.setEncoding('utf8');
    clients.add(client);

    client.on('end', () => {
        //this piece isn't written yet
        clients.remove(client);
    });

    client.on('data', data => {
        const message = `${client.userName}: ${data}`;
        clients.getBroadcastClients(client)
            .forEach(client => client.write(message));
    });
});