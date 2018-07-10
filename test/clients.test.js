const assert = require('assert');
const ChatRoom = require('../lib/chatRoom');

describe('Chatroom clients', () => {
    let clients = null;
    const c1 = {};
    const c2 = {};
    const c3 = {};

    beforeEach(() => {
        clients = new ChatRoom();
        clients.add(c1);
        clients.add(c2);
        clients.add(c3);
        console.log(c1);
    });
    
    it('takes new sockets and assigns usernames', () => {
        assert.equal(c1.userName, 'user-1');
        assert.equal(c2.userName, 'user-2');
        assert.equal(c3.userName, 'user-3');
    });

    it('stores client', () => {
        const client = clients.getClient(c1.userName);
        assert.deepEqual(client, c1);
    });

    // it('it renames a username', () => {

    // });

    // it('cannot rename to an existing username', () => {

    // });

    // it('returns total list of clients', () => {

    // });

});