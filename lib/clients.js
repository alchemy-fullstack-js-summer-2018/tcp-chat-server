module.exports = class Clients {
    constructor() {
        this.map = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        let userName = client.username;
        this.map.set(userName, client);
    }
    
    getClient(userName) {
        console.log(this.map);
        return this.map.get(userName);
    }

    // remove(client) {
    //     this.map.delete(client);
    // }
};