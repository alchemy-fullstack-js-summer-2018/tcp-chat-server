const assert = require('assert');
const ChatRoom = require('../lib/chatroom');

describe('Chat Room', () => {

    it('takes a socket, assigns random user name, and stores by user name', () => {
        const chatroom = new ChatRoom();

        return chatroom.add({ username: 'John' })
            .then(
                assert.equal(client.username, 'John')
            );
    });
});