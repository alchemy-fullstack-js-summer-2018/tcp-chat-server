module.exports = function parseMessage(message) {
    if(message[0] !== '@')
        return null;
    
    if(message.slice(0, 4) === '@nick') {
        message.arg = message.slice(5).split(' ')[0];
        message.message = 'nick';
    }
    return message;
};
    