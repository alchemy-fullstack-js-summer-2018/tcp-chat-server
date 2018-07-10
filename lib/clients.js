module.exports = class Clients {
    constructor() {
        this.set = new Set();
        this.userNumber = 1;
    }

    add(client) {
        client.username = 'user${this.userNumber++}';
        this.set.add(client);
    }

    getClient(username) {
        return this.clients.get(username);
    }
};