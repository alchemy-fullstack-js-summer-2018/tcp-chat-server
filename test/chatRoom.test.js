const assert = require('assert');
const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom management', () => {
    let testUser = null;
    let chatRoom = null;

    beforeEach('creates new chatRoom', () => {
        testUser = {};
        chatRoom = new ChatRoom();
        chatRoom.add(testUser);
    });

    it('takes a socket, assigns random user name, and stores by user name', () => {
        
        assert.deepEqual(testUser.userName, 'user1');   
    });
    
    it('returned user is the same as the one added previously', () => {
        const gottenUser = chatRoom.getClient('user1');
        assert.deepEqual(gottenUser, testUser);
    });
    
    it('rename method', () => {
        chatRoom.rename('user1', 'userX');
        assert.deepEqual(chatRoom.getClient('userX').userName, 'userX');
        assert.deepEqual(chatRoom.getClient('user1'), null);
    });




});