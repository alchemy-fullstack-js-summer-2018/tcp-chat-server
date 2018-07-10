const assert = require('assert');
const ChatRoom = require('../lib/chatroom');

describe('Chat Room', () => {

    const c1 = {};
    let clients = null;

    beforeEach(() => {
        clients = new ChatRoom();
        clients.add(c1);
    });

    it('adds a user with a username', () => {
        assert.equal(c1.username, 'user1');
    });
});