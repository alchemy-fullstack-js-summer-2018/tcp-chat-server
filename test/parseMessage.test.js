const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('parse message', () => {
    
    it('returns null when input does not begin with @', () => {
        const input = 'why can\'t anyone hear me?? ToT';
        assert.equal(parseMessage(input), null);
    });

    it('properly parses @all command', () => {
        const input = '@all love letter, anyone?';
        const expected = {
            command: 'all',
            arg: null,
            text: 'love letter, anyone?'
        };
        assert.equal(parseMessage(input), expected);
    });

    it('properly parses @nick command', () => {
        const input = '@nick:arthur';
        const expected = {
            command: 'nick',
            arg: 'arthur',
            text: null
        };
        assert.equal(parseMessage(input), expected);
    });

    it('properly parses @dm command', () => {
        const input = '@dm:easton get sniped, BITCH';
        const expected = {
            command: 'dm',
            arg: 'easton',
            text: 'get sniped, BITCH'
        };
        assert.equal(parseMessage(input), expected);
    });
});