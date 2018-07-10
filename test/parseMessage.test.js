const assert = require('assert');
const parseMessage = require('../lib/parseMessage');

describe('message and command parsing functionality', () => {
    it('returns null if first character is not @', () => {
        let nullMessage = parseMessage('hello world!');
        assert.equal(nullMessage, null);
    });

    it('brings back a command object for sending out a message to everyone', () => {
        let allMessage = parseMessage('@all hello world');
        const sampleObj = {
            command: 'all',
            text: ' hello world'
        };
        assert.deepEqual(allMessage, sampleObj);
    });

    it('brings back a command object for changing a nickname', () => {
        let renameMessage = parseMessage('@nick:Bobby');
        const sampleObj = {
            command: 'nick:',
            arg: 'Bobby'
        };
        assert.deepEqual(renameMessage, sampleObj);
    });

    it('brings back a command object for sending a private message', () => {
        let privateMessage = parseMessage('@dm:Arthur what up playboy');
        const sampleObj = {
            command: 'dm:',
            arg: 'Arthur',
            text: ' what up playboy'
        };
        assert.deepEqual(privateMessage, sampleObj);
    });
    
});