module.exports = class ChatRoom {
    constructor() {
        this.set = new Set();
        this.userNumber = 1;
    }
    add(client) {
        const username = `guest${this.userNumber++}`;
        client.username = username;
        this.set.add(username, client);
    }
    getAll() {
        return [...this.set.values()];
    }
};
