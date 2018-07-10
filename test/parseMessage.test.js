const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('parseMessage function', () => {
    it('returns null for strings that do not start with @', () => {
        const badStatus = parseMessage('hello world!');
        // const goodStatus = parseMessage('@hello world!');
        assert.equal(badStatus, null);
        // assert.equal(goodStatus, 1);
    });
    it('returns a command object with correct properties', () => {
        const command = parseMessage('@cmd:param some text');
        assert.deepEqual(command, { command: 'cmd', arg: 'param', text: 'some text' });
    });
});