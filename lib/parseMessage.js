module.exports = function parseMessage(message) {
    /*return an object like this
    { 
        command: 'cmd',
        arg: 'param',
        text: 'some text'
    }
    */ 
    if(!message || message[0] !== '@') return null;
    const commandObj = {};
    return commandObj;
};