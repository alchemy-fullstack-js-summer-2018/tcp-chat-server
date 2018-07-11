module.exports = class ChatRoom {
    constructor() {
        this.users = new Map();
        this.userNumber = 1;
    }

    add(client) {
        const defaultName = `user${this.userNumber++}`;
        client.userName = defaultName;
        this.users.set(defaultName, client);
    }

    rename(prevName, newName) {   
        if(this.users.has(newName)) return;
        const user = this.getClient(prevName);
        user.userName = newName;
        this.users.set(newName, user);
        this.users.delete(prevName);
        
    }

    getClient(userName) {
        return this.users.get(userName);
    }

    getAllClients() {
        return [...this.users.values()];
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }
};