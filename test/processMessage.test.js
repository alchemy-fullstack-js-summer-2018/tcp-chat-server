const assert = require('assert');
const processMessage = require('../lib/processMessage');

describe('messages starting with @', () => {

    it('Message with @', () => {
        assert.equal(processMessage('@hello'), 'HELLO');
    });

    it('Message without @', () => {
        assert.equal(processMessage('hello'), 'hello');
    });
});