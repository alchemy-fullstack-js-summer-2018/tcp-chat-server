const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('parse message', () => {
    it('returns null if the command does not begin with @ symbol', () => {
        const message = 'change my username';
        assert.equal(parseMessage(message), null);
    });
});