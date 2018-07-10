const assert = require('assert');
const ChatRoom = require('../lib/ChatRoom');

describe('Chatroom', () => {
    const c1 = {};
    const c2 = {};
    const c3 = {};
    let chatRoom = null;

    beforeEach(() => {
        chatRoom = new ChatRoom();
        chatRoom.add(c1);
        chatRoom.add(c2);
        chatRoom.add(c3);
    });

    it('assigns a username', () => {
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
        assert.equal(c3.username, 'user3');
    });

    it('gets the username', () => {
        const client = chatRoom.getClient('user1');
        assert.deepEqual(client, { username: 'user1' });
    });

    it('removes a username', () => {
        const removeStatus = chatRoom.remove('user2');
        assert.equal(removeStatus, true);
    });

    it('renames the user and does not return old client', () => {
        const trueStatus = chatRoom.rename('user1', 'user76');
        const status = chatRoom.getClient('user1');
        assert.equal(c1.username, 'user76');
        assert.equal(trueStatus, true);
        assert.equal(status, null);
    });

    it('returns false if same name', () => {
        const status = chatRoom.rename('user76', 'user76');
        assert.equal(status, false);
    });

    it('returns all clients as an array', () => {
        const clients = chatRoom.all();
        assert.deepEqual(clients, [c1, c2, c3]);
    });

    it('returns all clients except the one that called the function', () => {
        const broadcastClients = chatRoom.getBroadcast(c1);
        assert.deepEqual(broadcastClients, [c2, c3]);
    });
});