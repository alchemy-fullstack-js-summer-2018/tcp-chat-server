module.exports = function parseMessage(message) {
    if(!message || message[0] !== '@') return null;
    let command = {};
    const firstSpace = message.indexOf(' ');
    
    if(message.toLowerCase().slice(1, 4) === 'all') {
        command.command = 'all';
        command.text = message.slice(5);
    }

    else if(message.toLowerCase().slice(1, 6) === 'nick:') {
        command.command = 'nick';
        command.arg = message.slice(6, firstSpace + 1);
    }

    else if(message.toLowerCase().slice(1, 4) === 'dm:') {
        command.command = 'dm';
        command.arg = message.slice(4, firstSpace);
        command.text = message.slice(firstSpace + 1);
    }

    else return null;

    return command;

};
