module.exports = class Clients {
    constructor() {
        this.set = new Set();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.set.add(client);
    }

    getAllClients() {
        return [...this.set.values()];
    }

    remove(client) {
        this.set.delete(client);
    }

    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    } 

    // can't figure out the rename
    // rename(oldName, yourNewName) {
    //     if(this.set.has(yourNewName)) return false;
    //     let client = this.getClient(oldName);
    //     console.log('clients hallo', client);
    //     client.username = yourNewName;
    //     this.clients.set(yourNewName, client);
    //     this.clients.delete(oldName); 
    // }
    // getClient(username) {
    //     return this.set.get(username);
    //}
};