const wordList = require('./wordList');
const { random } = require('./functions');

module.exports = class ChatRoom {
    constructor() {
        this.users = new Map();
    }

    add(client) {
        const username = random(wordList).toLowerCase();
        client.username = username;
        this.users.set(username, client);
    }

    rename(oldName, newName) {
        if(this.users.has(newName)) return;
        const user = this.getClient(oldName);
        user.username = newName;
        this.users.set(newName, user);
        this.remove(oldName);
    }

    getClient(username) {
        return this.users.get(username);
    }

    all() {
        return [...this.users.values()];
    }

    remove(username) {
        return this.users.delete(username);
    }
};