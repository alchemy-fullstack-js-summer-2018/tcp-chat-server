module.exports = function parseMessage(message) {
    let parsedMessage = {};
   
    if(message[0] !== '@')
        return null;
    
    //change username
    if(message.slice(0, 5) === '@nick') {
        console.log('hitting the nick if');
        parsedMessage.arg = message.slice(5).split(' ')[1];
        parsedMessage.command = '@nick';
    }
    
    //message all
    else if(message.slice(0, 4) === '@all') {
        parsedMessage.text = message.slice(5);
        parsedMessage.command = '@all';
    }

    //send a dm

    return parsedMessage;
};
    