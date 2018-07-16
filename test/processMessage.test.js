const assert = require('assert');
const processMessage = require('../lib/processMessage');

describe('messages in chatRoom', () => {
    const invalid = 'hello';
    const valid = '@hello';
    const expected = {
        command: 'all',
        arg: undefined,
        text: 'hello'
    };

    it('Message starts with @', () => {
        console.log('this', processMessage(valid));
        assert.equal(processMessage(expected), 'h e l l o');
    });

    it('Message does not start with @', () => {
        assert.equal(processMessage(invalid), null);
    });

    it('expected', () => {
        console.log(expected);
    });
    
});