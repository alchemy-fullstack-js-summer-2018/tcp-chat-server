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

};