

module.exports = class ChatRoom {
    constructor() {
        this.set = new Set();
    }

    add(client) {
        client.username = 'John';
        this.set.add(client);
    }
};