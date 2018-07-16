const assert = require('assert');
const processMessage = require('../lib/processMessage');

describe('messages in chatRoom', () => {
    const invalid = 'hello';
    const valid = '@all hello';
    const expected = {
        command: 'all',
        arg: undefined,
        text: 'hello'
    };

    it('Message starts with @', () => {
        assert.ok(processMessage(valid), '@all');
    });

    it('Message does not start with @', () => {
        assert.equal(processMessage(invalid), null);
    });

    it('returns object', () => {
        assert.deepEqual(processMessage(valid), expected); 
    });
    
});