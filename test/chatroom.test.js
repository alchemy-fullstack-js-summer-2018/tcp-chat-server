const assert = require('assert');
const Chatroom = require('../lib/chatroom');

describe('Chatroom', () => {

    const c1 = {};
    const c2 = {};
    const c3 = {};
    let chatroom = null;
    beforeEach(() => {
        chatroom = new Chatroom();
        chatroom.add(c1);
        chatroom.add(c2);
        chatroom.add(c3);
    });

    it('assigns names', () => {
        assert.equal(c1.userName, 'user1');
        assert.equal(c2.userName, 'user2');
        assert.equal(c3.userName, 'user3');
    });

    it('gets a client', () => {
        const thisClient = chatroom.getClient(c2.userName);
        assert.deepEqual(thisClient, c2);
    });

    it('gets all the clients', () => {
        const allClients = chatroom.all();
        assert.deepEqual(allClients, [c1, c2, c3]);
    });

    it('sends messages to everyone but self', () => {
        const allButSelf = chatroom.getBroadcastClients(c2);
        assert.deepEqual(allButSelf, [c1, c3]);
    });

    it('removes clients', () => {
        const oneFewerClient = chatroom.remove('user3');
        assert.equal(oneFewerClient, true);
    });

    describe('renaming functionality', () => {

        it('changes the username of a client', () => {
            chatroom.rename('user1', 'Bobby');
            assert.equal(c1.userName, 'Bobby');
        });
        
        it('does not let you call old user anymore', () => {
            chatroom.rename('user1', 'Bobby');
            assert.equal(chatroom.getClient(c1), undefined);
        });

    });
});