const assert = require('assert');
const processMessage = require('../lib/processMessage');

describe('Messages', () => {

    it('Ignores strings that do not start with @ (null)', () => {
        const input = processMessage('I love you');
        assert.equal(input, null);
    });

    it('Handles the @all option', () => {
        const input = processMessage('@all hi people');
        const result = {
            command: 'all',
            arg: undefined,
            text: 'hi people'
        };
        assert.deepEqual(input, result);
    });

    it('Handles the @Olive option', () => {
        const input = processMessage('@Olive:Beverly');
        const result = {
            command: 'Olive',
            arg: 'Beverly',
            text: ''
        };
        assert.deepEqual(input, result);
    });

    it('Handles @dm option', () => {
        const input = processMessage('@dm:Olive1 How do you do?');
        const result = {
            command: 'dm',
            arg: 'Olive1',
            text: 'How do you do?'
        };
        assert.deepEqual(input, result);
    });
});