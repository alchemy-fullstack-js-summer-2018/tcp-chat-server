module.exports = function parseMessage(message) {
    if(!message || message[0] !== '@') return null;
    const commandObj = {};
    
    if(message.slice(1, message.search(' ')) === 'all'){
        commandObj.command = 'all',
        commandObj.text = message.slice(message.search(' '));
    }
    else if(message.slice(1, 6) === 'nick:'){
        commandObj.command = 'nick:',
        commandObj.arg = message.slice(6);
    }
    else if(message.slice(1, 4) === 'dm:'){
        commandObj.command = 'dm:',
        commandObj.arg = message.slice(4).split(' ')[0];
        commandObj.text = message.slice(message.indexOf(' '));
    }

    return commandObj;
};