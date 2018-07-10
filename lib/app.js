const net = require('net');
const Chatroom = require('./chatroom');
const parseMessage = require('./parseMessage');

const chatroom = new Chatroom();

module.exports = net.createServer(client => {
    client.setEncoding('utf8');
    chatroom.add(client);
    console.log(`${client.userName} has connected!`);

    client.on('data', data => {
        // const message = `${client.userName}: ${data}`;
        const message = parseMessage(data);
        switch (message.command){
            case 'all':
                chatroom.getBroadcastClients(client)
                    .forEach(client => client.write(`${client.userName}:${message.text}`));
        }
        // chatroom.getBroadcastClients(client)
        //     .forEach(client => client.write(message));
    });
    client.on('end', () => {
        //this piece isn't written yet
        console.log(`${client.userName} has disconnected`);
        chatroom.remove(client);
    });

});