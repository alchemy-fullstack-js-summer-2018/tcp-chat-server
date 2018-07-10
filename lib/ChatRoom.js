module.exports = class ChatRoom {
    constructor() {
        this.users = new Map();
        this.userNumber = 1;
    }

    add(client) {
        const defaultName = `user${this.userNumber++}`;
        client.userName = defaultName;
        this.users.set(defaultName, client);
    }

    rename(client) {
        
    }

    getClient(userName) {
        return this.client.userName;
    }

    getAllClients() {
        return [...this.users.values()];
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }
};