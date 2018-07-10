const assert = require('assert');
const parseMessage = require('../lib/ParseMessage');

describe('parse message', () => {
    
    it('returns null if the command does not begin with @ symbol', () => {
        const message = 'change my username';
        assert.equal(parseMessage(message), null);
    });

    it('handles the rename command @nick', () => {
        const command = '@nick NewUserName';
        const parsed = parseMessage(command);
        console.log(parsed);
        const expected = {
            command: '@nick',
            arg: 'NewUserName',
        };
        assert.deepEqual(parsed, expected);
    });
});