
module.exports = function parseMessage(input) {
    if(input[0] !== '@') return null;
    let command = {};
    const words = input.split(' ');
    
    command.fn = words[0].split(':')[0].slice(1);
    command.arg = words[0].split(':')[1];
    command.text = words.slice(1).join(' ');

    return command;
};