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

    it('assigns namez', () => {
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
        assert.equal(c3.username, 'user3');
    });

    it('stores all active clients', () => {
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c1, c2, c3]);
    });

    it('removes a client', () => {
        clients.remove(c1);
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c2, c3]);
    });

    it('gives back a list of clients to broadcast to (minus sender)', () => {
        const broadcast = clients.getBroadcastClients(c1);
        assert.deepEqual(broadcast, [c2, c3]);
    });

    // dm test in progress:
    // it('gives back client to broadcast direct message (not sender)', () => {
    //     const broadcast = clients.getBroadcastDMClient(c1);
    //     assert.deepEqual(broadcast, [c2]);
    // });

});