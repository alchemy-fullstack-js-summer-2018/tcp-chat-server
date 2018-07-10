const assert = require('assert');
const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom management', () => {
    let client = null;
    let chatRoom = null;

    beforeEach('creates new chatRoom', () => {
        client = {};
        chatRoom = new ChatRoom();
        chatRoom.add(client);
    });

    it('takes a socket, assigns random user name, and stores by user name', () => {

        assert.deepEqual(client.userName, 'user1');   
    });

    it('returned user is the same as the one added previously', () => {

    });
});