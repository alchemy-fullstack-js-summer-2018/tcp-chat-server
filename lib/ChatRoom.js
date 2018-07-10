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

    all() {
        return [...this.clients.values()];
    }

    getClient(username) {
        return this.clients.get(username);
    }

    remove(username) {
        return this.clients.delete(username);
    }

    getBroadCastClients(client) {
        return this.all().filter(c => c !== client);
    }

    rename(oldUsername, newUsername) {
        if(this.clients.has(oldUsername)) return;
        const client = this.getClient(oldUsername);
        client.username = newUsername;
        this.clients.set(newUsername, client);
        this.clients.delete(oldUsername);
    }
};