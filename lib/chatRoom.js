module.exports = class ChatRoom {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(client) {
        const username = `user-${this.userNumber++}`;
        client.username = username;
        this.map.set(username, client);
    }

    getClient(username) {
        return this.map.get(username);
    }

    rename(username, newusername) {
        if(this.map.has(newusername)) {
            return false;
        }
        else { 
            const socket = this.map.get(username);
            socket.username = newusername;
            this.map.set(newusername, socket);
            return this.map.delete(username);
        }
    }

    all() {
        return [...this.map.values()];
    }

    getBroadcastClients(client) {
        return this.all().filter(c => c !== client);
    }
};