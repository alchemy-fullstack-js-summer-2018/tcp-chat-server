const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('message and command parsing functionality', () => {
    it('returns null if first character is not @', () => {
        let nullMessage = parseMessage('hello world!');
        assert.equal(nullMessage, null);
    });
});