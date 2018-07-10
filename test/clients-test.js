const assert = require('assert');
const Clients = require('../lib/clients');

describe('Clients', () => {
    const c1 = {};
    const c2 = {};
    let clients = null;
    beforeEach(() => {
        clients = new Clients();
        clients.add(c1);
        clients.add(c2);
    
    });

    it('assigns namez', () => {
        assert.equal(c1.username, 'user1');
        assert.equal(c2.username, 'user2');
    });
});