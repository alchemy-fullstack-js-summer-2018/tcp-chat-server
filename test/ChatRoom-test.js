const assert = require('assert');
const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom', () => {

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
    
    it('assigns a username to a client/socket and saves', () => {
        assert.equal(c1.username, 'guest1');
        assert.equal(c2.username, 'guest2');
        assert.equal(c3.username, 'guest3');
        assert.deepEqual(clients.getClient(c1.username), c1);
    });

    it('returns list of all clients', () => {
        assert.deepEqual(clients.all(), [c1, c2, c3]);
    });

});