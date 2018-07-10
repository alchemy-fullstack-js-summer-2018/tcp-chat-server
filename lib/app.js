const net = require('net');
const Clients = require('./clients');

const clients = new Clients();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    clients.add(client);
    console.log('Someone has connected!');

    client.on('data', data => {
        const message = `${client.userName}: ${data}`;
        clients.getBroadcastClients(client)
            .forEach(client => client.write(message));
    });
    client.on('end', () => {
        //this piece isn't written yet
        console.log('client has disconnected');
        clients.remove(client);
    });

});