const assert = require('assert');
const ChatRoom = require('../lib/chatRoom');
const processMessage = require('../lib/processMessage');

describe('Chatroom clients', () => {
    let chatRoom = null;
    const c1 = {};
    const c2 = {};
    const c3 = {};

    beforeEach(() => {
        chatRoom = new ChatRoom();
        chatRoom.add(c1);
        chatRoom.add(c2);
        chatRoom.add(c3);
    });
    
    it('assigns username property to client object', () => {
        assert.equal(c1.username, 'user-1');
        assert.equal(c2.username, 'user-2');
        assert.equal(c3.username, 'user-3');
    });

    it('returns same name that was supplied to the add method', () => {
        const client = chatRoom.getClient(c1.username);
        assert.deepEqual(client, c1);
    });

    it('it renames a user', () => {
        const client = c1.username;
        const newName = 'Big-Mouth';
        const newusername = chatRoom.rename(client, newName);
        assert.equal(newusername, true);
        assert.equal(chatRoom.getClient(client), undefined);
        assert.ok(chatRoom.getClient(newName));
        assert.equal(chatRoom.getClient(newName).username, newName);
    });

    it('does not allow user to rename to existing username', () => {
        const result = chatRoom.rename(c1.username, c2.username);
        assert.equal(result, false);
        assert.equal(c1, chatRoom.getClient(c1.username));
        assert.equal(c2, chatRoom.getClient(c2.username));
    });

    it('returns total list of clients', () => {
        const result = chatRoom.all();
        assert.deepEqual(result, [c1, c2, c3]);
    });

});

describe('process message', () => {
    const fail = 'hello there!';
    const success = '@all hello there!';
    const expected = {
        command: 'all',
        arg: undefined,
        text: 'hello there!'
    };

    it('returns null if @ is not first character', () => {
        assert.equal(processMessage(fail), null);
    });
    
    it('returns object', () => {
        assert.deepEqual(processMessage(success), expected); 
    });
});