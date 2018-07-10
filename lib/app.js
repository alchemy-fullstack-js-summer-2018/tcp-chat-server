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
                    .forEach(otherClient => otherClient.write(`${client.userName}:${message.text}`));
                break;
            case 'nick:':
                chatroom.rename(client.userName, message.arg);
                console.log(`${client.userName} has changed their name!`);
                break;
            case 'dm:':
                chatroom.getClient(message.arg).write(`DM from ${client.userName}: ${message.text}`);
                break;
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