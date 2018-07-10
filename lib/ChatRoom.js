module.exports = class ChatRoom {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        let userName = client.username;
        this.map.set(userName, client);
    }

    getClient(username) {
        return this.map.get(username);
    }
};