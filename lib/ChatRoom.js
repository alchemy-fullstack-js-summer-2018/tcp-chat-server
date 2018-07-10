module.exports = class ChatRoom {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        let userName = client.username;
        return this.map.set(userName, client);
    }

    getClient(username) {
        return this.map.get(username);
    }

    rename(username, newname) {
        if(newname === username) return false;
        let user = this.getClient(username);
        this.map.delete(username);
        this.map.set(newname, user);
        user.username = newname;
        return true;
    }

    all() {
        return [...this.map.values()];
    }
};