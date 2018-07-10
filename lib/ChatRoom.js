module.exports = class ChatRoom {
    constructor() {
        this.users = new Map();
        this.userNumber = 1;
    }
    add(client) {
        const username = `guest${this.userNumber++}`;
        client.username = username;
        this.users.set(username, client);
    }
    getAll() {
        return [...this.users.values()];
    }

    getClient(username) {
        return this.users.get(username);
    }

};
