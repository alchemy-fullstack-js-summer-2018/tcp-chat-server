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

    it('assigns generic username to a socket and stores by user name', () => {
        
        assert.equal(u1.username, 'anonymous1');
        assert.equal(u2.username, 'anonymous2');
        assert.equal(u3.username, 'anonymous3');

        assert.deepEqual(users.getClient(u1.username), u1);
    });

    it('renames a user', () => {
        users.rename(u1.username, 'arthur');
        assert.deepEqual(users.getClient(u1.username), u1);
    });

    it('will not rename a user to an existing username', () => {
        users.rename(u1.username, 'anonymous2');
        assert.deepEqual(u1.username, 'anonymous1');
    });

    it('returns all sockets', () => {
        assert.deepEqual(users.all(), [u1, u2, u3]);
    });
});