const assert = require('assert');
const ChatRoom = require('../lib/ChatRoom');


describe('Clients', () => {

    const c1 = {};
    const c2 = {};
    const c3 = {};
    let clients = null;
    
    beforeEach(() => {
        clients = new ChatRoom();
        clients.add(c1);
        clients.add(c2);
        clients.add(c3);
    });

    it('Stores clients', () => {
        const allClients = clients.all();
        assert.deepEqual(allClients, [c1, c2, c3]);
    });

    it('Assigns a username', () => {
        assert.equal(c1.username, 'User#1');
        assert.equal(c2.username, 'User#2');
        assert.equal(c3.username, 'User#3');
    });

    it('Returns object of assigned username', () => {
        const result = clients.getClient(c2.username);
        assert.deepEqual(result, c2);
    });

    it('Removes a client', () => {
        assert.ok(clients.remove('User#1'));
    });

    it('Renames a user', () => {
        clients.rename(c1.username, 'Frank');
        const result = clients.getClient(c1.username);
        assert.deepEqual(result, c1);
    });

    it('Won\'t use an existing username', () => {
        clients.rename(c1.username, 'User#2');
        assert.deepEqual(c1.username, 'User#1');
    });


});