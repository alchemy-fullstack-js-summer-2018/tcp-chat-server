const assert = require('assert');
const ChatRoom = require('../lib/chatroom');

describe('Chat Room takes a socket, assigns random user name, and stores by user name', () => {

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

    it('adds a user with a username', () => {
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
        assert.equal(c3.username, 'user3');
    });

    it('adds usernames to client object', () => {
        const allClients = clients.getAllClients();
        assert.deepEqual(allClients, [c1, c2, c3]);
    });

    it('returns unique username for each client', () => {
        const user1 = clients.getClient('user1');
        assert.equal(user1, c1);
    });

    it('gives back list of clients (minus sender)', () => {
        const broadcast = clients.getBroadcastClients(c1);
        assert.deepEqual(broadcast, [c2, c3]);
    });
});

describe('Chat Room Instance renames a user', () => {
    
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
    
    it.only('calling rename returns true', () => {
        const result = clients.rename();
        assert.equal(result, true);
    });
});