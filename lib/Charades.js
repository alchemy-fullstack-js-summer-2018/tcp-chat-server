const wordList = require('./wordList');
const { random } = require('./functions');

module.exports = class Charades{
    constructor() {
        this.wordList = wordList;
        this.gameInProgress = false;
        this.secretWord = undefined;
        this.actor = null;
    }

    start(username) {
        this.gameInProgress === true;
        this.actor = username;
        //     secretWord = random(wordList);
        //     broadcast(`${actor.username} is the actor! They can only use emojis to have other players guess the secret word.`);
        //     actor.write(`\nThe secret word is: ${secretWord}`);
        // }
    }

    guess() {
    // if(client !== actor && command.text.toUpperCase() === secretWord) {
        //     broadcast(`${client.username} guessed the secret word: ${secretWord}!`);
        //     gameInProgress === false;
        //     actor = null;
        //     secretWord = undefined;
        // }
    }

    end() {
    
    }
};