module.exports = { messageAll, changeUsername, directMessage };

function messageAll(message) {
    if(!message || message[0] !== '@') return message;
}

function changeUsername(message) {
    if(!message || message[0] !== '@') return message;
}

function directMessage(message) {
    if(!message || message[0] !== '@') return message;
}
