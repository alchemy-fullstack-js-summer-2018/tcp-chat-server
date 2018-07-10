const assert = require('assert');
const ChatRoom = require('../lib/ChatRoom');

describe('Chat room', () => {
    const c1 = {};
    let chatRoom = null;

    beforeEach(() => {
        chatRoom = new ChatRoom();
        chatRoom.add(c1);
    });

    it('takes a socket and assigns a username', () => {
        assert.equal(c1.username, 'user1');
    });
});