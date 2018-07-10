module.exports = class ChatRoom {
    constructor() {
        this.clients = new Map();
        this.userNumber = 1;
    }

    add(client) {
        const username = `User#${this.userNumber++}`;
        client.username = username;
        this.clients.set(client.username, client);
    }

    getAllClients() {
        return [...this.clients.values()];
    }

    getClient(username) {
        return this.clients.get(username);
    }

    remove(username) {
        return this.clients.delete(username);
    }

    getBroadCastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }

    rename(old, new) {
        
    }
};