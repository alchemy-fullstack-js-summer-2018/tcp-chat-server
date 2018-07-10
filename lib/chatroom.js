

module.exports = class ChatRoom {
    constructor() {
        this.clients = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.clients.set(client, client);
    }

    getAllClients() {
        let client = {};
        this.clients.get(client);
    }
};