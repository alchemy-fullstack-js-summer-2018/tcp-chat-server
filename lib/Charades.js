const wordList = require('./wordList');
// const { random } = require('./functions');
function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}
module.exports = class Charades{
    constructor() {
        this.secretWord = '';
        this.actor = null;
    }

    start(username) {
        this.actor = username;
        this.secretWord = random(wordList);   
    }

    end() {
        this.actor = null;
        this.secretWord = undefined;
    }
};