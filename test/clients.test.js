const assert = require('assert');
const Clients = require('../lib/clients');

describe('Clients', () => {

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
    
    it('returns a name as the username property', () => {

    });

    it('assigns the username as a property of the client object', () => {

    });

    it('returns an identical object as the one supplied to the add call', () => {

    });

});



