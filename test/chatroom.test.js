const assert = require('assert');
const ChatRoom = require('../lib/chatroom');

describe('Chat Room', () => {

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
        const allClients = clients.getAllClients;
        assert.deepEqual(allClients, [c1, c2, c3]);
    });
});