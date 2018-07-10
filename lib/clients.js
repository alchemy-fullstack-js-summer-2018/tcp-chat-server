module.exports = class Clients {
    constructor() {
        this.users = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.users.set(client, client);
    }

    getAllClients() {
        return [...this.users.values()];
    }

    remove(client) {
        this.users.delete(client);
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }
};