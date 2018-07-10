const assert = require('assert');
const processMessage = require('../lib/processMessage');

describe('messages starting with @', () => {

    it('Message with @', () => {
        assert.equal(processMessage('@hello'), 'HELLO');
    });

    it('Message without @', () => {
        assert.equal(processMessage(null), null);
    });

    it.skip('Message returns as an object', () => {
        assert.equal(processMessage('@cmd:param some text'),  { 
            command: 'cmd',
            arg: 'param',
            text: 'some text'
        });
    });
});