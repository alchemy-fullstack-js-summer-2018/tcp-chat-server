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
    
});