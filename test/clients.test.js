const assert = require('assert');
const Clients = require('../lib/clients');

describe('the clients', () => {

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

    it('Assigning names', () => {
        assert.equal(c1.username, 'user1');
        assert.equal(c1.username, 'user1');
        assert.equal(c1.username, 'user1');
    });

    it.skip('Renaming users', () => {

    });

    it('Storing clients', () => {
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c1, c2, c3]);

    });

    it.skip('Getting one client', () => {

    });

    it('Removing client', () => {
        clients.remove(c1);
        clients.remove(c2);
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c3]);

    });

    it('Return list of clients (minus the sender)', ()  => {
        const broadcast = clients.getBroadcastClients(c1);
        assert.deepEqual(broadcast, [c2, c3]);
    });

});