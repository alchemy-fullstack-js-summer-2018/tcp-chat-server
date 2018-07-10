module.exports = function parseMessage(message) {
    if(message[0] !== '@')
        return null;
    
    //change username
    if(message.slice(0, 4) === '@nick') {
        message.arg = message.slice(5).split(' ')[0];
        message.message = 'nick';
    }
    
    //message all
    else if(message.slice(0, 3) === '@all') {
        message.text = message.slice(5);
        message.message = 'all';
    }


    //send a dm

    return message;
};
    