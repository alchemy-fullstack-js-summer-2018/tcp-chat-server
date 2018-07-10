const assert = require('assert');
const Clients = require('../lib/clients');

describe('the clients', () => {

    const c1 = {};
    const c2 = {};
    const c3 = {};
    let clients = null;
    beforeEach(() => {
        clients = new Clients();
        clients.add(c1);
        clients.add(c2);
        clients.add(c3);

    });

    it('Assign names', () => {
        assert.equal(c1.username, 'user1');
        assert.equal(c1.username, 'user1');
        assert.equal(c1.username, 'user1');
    });

});