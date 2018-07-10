module.exports = function processMessage(message) {
    if(!message || message[0] !== '@') return message;

    if(!message || message[0] == '') return null;
    
    return message.slice(1).toUpperCase();
};