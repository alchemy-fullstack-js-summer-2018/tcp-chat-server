const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('parsing messages', () => {
    const invalidMessage = 'Hello anyone!';
    const publicMessage = '@all Hello everyone!';
    const rename = '@nick:new_name ';
    const privateMessage = '@dm:some_user do you have the package?';
    const allCommand = {
        command: 'all',
        text: 'Hello everyone!'
    };
    const nickCommand = {
        command: 'nick',
        arg: 'new_name'
    };
    const dmCommand = {
        command: 'dm',
        arg: 'some_user',
        text: 'do you have the package?'
    };


    it('returns null if message does not begin with @', () => {
        assert.equal(parseMessage(invalidMessage), null);
    });

    it('returns command object with all and text', () => {
        assert.deepEqual(parseMessage(publicMessage), allCommand);
    });

    it('returns command object with nick and new_name', () => {
        assert.deepEqual(parseMessage(rename), nickCommand);
    });

    it('returns command object with dm, some_user and text', () => {
        assert.deepEqual(parseMessage(privateMessage), dmCommand);
    });


});