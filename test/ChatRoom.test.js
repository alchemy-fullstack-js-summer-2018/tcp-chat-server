const assert = require('assert');
const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {

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
        
        assert.deepEqual(users.getClient(u1.username), u1);
    });

    it('renames a user', () => {
        users.rename(u1.username, 'arthur');
        assert.deepEqual(users.getClient(u1.username), u1);
    });

    it('will not rename a user to an existing username', () => {
        users.rename(u1.username, u2.username);
        assert.notEqual(u1.username, u2.username);
    });

    it('returns all sockets', () => {
        assert.deepEqual(users.all(), [u1, u2, u3]);
    });

    it('removes users', () => {
        assert.ok(users.remove(u1.username));
    });
});