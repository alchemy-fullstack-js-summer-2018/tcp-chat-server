module.exports = class ChatRoom {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(client) {
        const username = `user${this.userNumber++}`;
        client.username = username;
        this.map.set(username, client);
    }

    getClient(username) {
        return this.map.get(username);
    }
};