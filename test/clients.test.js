const assert = require('assert');
const Clients = require('../lib/clients');

describe('Clients', () => {

    const c1 = {};
    const c2 = {};
    const c3 = {};
    let clients = null;
    beforeEach(() => {
        clients = new Clients();
        clients.add(c1);
        clients.add(c2);
        clients.add(c3);
    });

    it('assigns names', () => {
        assert.equal(c1.userName, 'user1');
        assert.equal(c2.userName, 'user2');
        assert.equal(c3.userName, 'user3');
    });

    it('gets a client', () => {
        const thisClient = clients.getClient(c2.userName);
        assert.deepEqual(thisClient, c2);
    });

    it('gets all the clients', () => {
        const allClients = clients.all();
        assert.deepEqual(allClients, [c1, c2, c3]);
    });

    it('sends messages to everyone but self', () => {
        const allButSelf = clients.getBroadcastClients(c2);
        assert.deepEqual(allButSelf, [c1, c3]);
    });

    it('removes clients', () => {
        const oneFewerClient = clients.remove('user3');
        console.log(clients);
        assert.equal(oneFewerClient, true);
    });

});