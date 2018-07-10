const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('parsing messages', () => {
    it('returns null if message does not begin with @', () => {
        const message = 'Hello everyone!';
        assert.equal(parseMessage(message), null);
    });
});