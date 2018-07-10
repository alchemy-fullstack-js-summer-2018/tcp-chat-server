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

    rename(oldUserName, newUserName) {
        if(this.users.has(newUserName)) return;
        const user = this.getClient(oldUserName);
        user.username = newUserName;
        this.users.set(newUserName, user);
        this.users.delete(oldUserName);
    }

};
