const assert = require('assert');
const ChatRoom = require('../lib/ChatRoom');

describe('Chat room', () => {
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
        let client = chatRoom.getClient('user1');
        assert.equal(client, 'username');
    });
});