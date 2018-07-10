module.exports = class Clients {
    constructor() {
        this.clients = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.userName = `user${this.userNumber++}`;
        let userName = client.userName;
        this.clients.set(userName, client);
    }
    
    getClient(userName) {
        return this.clients.get(userName);
    }

    all() {
        return [...this.clients.values()];
    }

    getBroadcastClients(client) {
        return this.all().filter(c => c !== client);
    }

    remove(client) {
        return this.clients.delete(client);
    }

};