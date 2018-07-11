const assert = require('assert');
const ChatRoom = require('../lib/ChatRoom');

describe('ChatRoom management', () => {
    let testUser = {};
    let testUser2 = {};
    let testUser3 = {};
    let chatRoom = null;

    beforeEach('creates new chatRoom', () => {
        chatRoom = new ChatRoom();
        chatRoom.add(testUser);
        chatRoom.add(testUser2);
        chatRoom.add(testUser3);
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

    it('fails to rename to an already existing name', () => {
        chatRoom.rename(testUser2.userName, testUser3.userName);
        assert.notEqual(testUser2.userName, testUser3.userName);
    });

    it('gets all users!', () => {
        assert.deepEqual(chatRoom.getAllClients(), [testUser, testUser2, testUser3]);
    });



});