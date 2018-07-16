const assert = require('assert');
const processMessage = require('../lib/processMessage');

describe('messages in chatRoom', () => {
    const invalid = 'hello';
    const valid = '@hello';

    it('Message starts with @', () => {
        assert.ok(processMessage(valid), '@');
    });

    it('Message does not start with @', () => {
        assert.equal(processMessage(invalid), null);
    });
    
});