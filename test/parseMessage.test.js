const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('parse message', () => {
    
    it('returns null when input does not begin with @', () => {
        const input = 'why can\'t anyone hear me?? ToT';
        assert.equal(parseMessage(input), null);
    });

    it('returns null if input is not a recognized command', () => {
        const input = '@destroy everyone';
        assert.equal(parseMessage(input), null);
    });

    it('properly parses @all command', () => {
        const input = '@all love letter, anyone?';
        const expected = {
            command: 'all',
            text: 'love letter, anyone?'
        };
        assert.deepEqual(parseMessage(input), expected);
    });

    it('properly parses @nick command', () => {
        const input = '@nick:arthur';
        const expected = {
            command: 'nick',
            arg: 'arthur',
        };
        assert.deepEqual(parseMessage(input), expected);
    });

    it('properly parses @dm command', () => {
        const input = '@dm:easton get sniped, BITCH';
        const expected = {
            command: 'dm',
            arg: 'easton',
            text: 'get sniped, BITCH'
        };
        assert.deepEqual(parseMessage(input), expected);
    });
});