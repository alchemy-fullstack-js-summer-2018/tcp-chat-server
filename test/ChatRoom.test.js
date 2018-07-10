const assert = require('assert');
const ChatRoom = require('../lib/ChatRoom');

describe.only('ChatRoom', () => {

    const u1 = {};
    const u2 = {};
    const u3 = {};
    let users = null;
    beforeEach(() => {
        users = new ChatRoom();
        users.add(u1);
        users.add(u2);
        users.add(u3);
    });

    it('assigns random username to a socket and stores by user name', () => {
        
        assert.equal(u1.username, 'user1');
        assert.equal(u2.username, 'user2');
        assert.equal(u3.username, 'user3');

        assert.deepEqual(users.getClient(u1.username), u1);
    });

});