const assert = require('assert');
const Charades = require('../lib/Charades');

describe.only('Charades', () => {
    let charades = null;
    let player = 'jim';
    beforeEach(() => {
        charades = new Charades();
    });

    it('starts game', () => {
        charades.start(player);
        assert.ok(charades.actor);
        assert.ok(charades.secretWord);
    });

    it('takes guesses', () => {

    });

    it('ends game', () => {

    });
});