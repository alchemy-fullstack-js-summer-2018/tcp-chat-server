module.exports = class ChatRoom {
    constructor() {
        this.users = new Map();
        this.userNumber = 1;
    }

    add(client) {
        const username = `anonymous${this.userNumber++}`;
        client.username = username;
        this.users.set(username, client);
    }

    rename(oldName, newName) {
        if(this.users.has(newName)) return;
        const user = this.getClient(oldName);
        user.username = newName;
        this.users.set(newName, user);
        this.users.delete(oldName);
    }

    getClient(username) {
        return this.users.get(username);
    }
};