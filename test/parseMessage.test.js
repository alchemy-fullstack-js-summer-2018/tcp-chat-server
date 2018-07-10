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
            fn: 'all',
            arg: undefined,
            text: 'love letter, anyone?'
        };
        assert.deepEqual(parseMessage(input), expected);
    });

    it('properly parses @nick command', () => {
        const input = '@nick:arthur';
        const expected = {
            fn: 'nick',
            arg: 'arthur',
            text: ''
        };
        assert.deepEqual(parseMessage(input), expected);
    });

    it('properly parses @dm command', () => {
        const input = '@dm:easton get sniped, BITCH';
        const expected = {
            fn: 'dm',
            arg: 'easton',
            text: 'get sniped, BITCH'
        };
        assert.deepEqual(parseMessage(input), expected);
    });

    it('properly parses @game command', () => {
        const input = '@game';
        const expected = {
            fn: 'game',
            arg: undefined,
            text: ''
        };
        assert.deepEqual(parseMessage(input), expected);
    });
});