module.exports = class Clients {
    constructor() {
        this.users = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.users.set(client, client);
    }

    rename(username, newUserName) {
        if(this.users.has(newUserName)) {
            return false;
        } else {
            const socket = this.users.get(username);
            socket.username = newUserName;
            this.users.set(newUserName, socket);
            return this.users.delete(username);
        }
    }

    getAllClients() {
        return [...this.users.values()];
    }

    getClient(client) {
        return this.users.get(client);
    }

    remove(client) {
        this.users.delete(client);
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }
};