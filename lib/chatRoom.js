module.exports = class ChatRoom {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(client) {
        const userName = `user-${this.userNumber++}`;
        client.userName = userName;
        this.map.set(userName, client);
    }

    getClient(userName) {
        return this.map.get(userName);
    }
};