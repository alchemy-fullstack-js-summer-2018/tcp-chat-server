module.exports = class Chatroom {
    constructor() {
        this.chatroom = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.userName = `user${this.userNumber++}`;
        let userName = client.userName;
        this.chatroom.set(userName, client);
    }

    rename(userName, newUserName) {
        let myUser = this.chatroom.get(userName);
        myUser.userName = newUserName;
        this.chatroom.set(newUserName, myUser);
        this.chatroom.delete(userName);
        return true;
    }
    
    getClient(userName) {
        return this.chatroom.get(userName);
    }

    all() {
        return [...this.chatroom.values()];
    }

    getBroadcastClients(client) {
        return this.all().filter(c => c !== client);
    }

    remove(client) {
        return this.chatroom.delete(client);
    }

};