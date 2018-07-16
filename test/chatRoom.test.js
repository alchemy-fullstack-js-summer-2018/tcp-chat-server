const assert = require('assert');
const Clients = require('../lib/chatRoom');

describe('the clients', () => {
    let clients = null;
    const c1 = {};
    const c2 = {};
    const c3 = {};
    

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

    it('Confirms assigned user name', () => {
        const client = clients.getClient(c1);
        assert.deepEqual(client, c1);
    });

    it('Renaming a user with new name', () => {
        const client = c1;
        const newName = '2much';
        const newUserName = clients.rename(client, newName);
        assert.equal(newUserName, true);
        assert.ok(clients.getClient(newName));
    });

    it('Storing clients', () => {
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c1, c2, c3]);

    });

    it('Getting one client', () => {
        const client = clients.getClient(c1);
        assert.equal(client, c1);
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