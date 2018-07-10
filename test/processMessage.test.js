const assert = require('assert');
const processMessage = require('../lib/processMessage');

describe('the message starting with @', () => {
    assert.equal(processMessage('@hello'), 'HELLO');
});