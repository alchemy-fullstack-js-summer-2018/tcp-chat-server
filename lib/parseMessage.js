
module.exports = function parseMessage(input) {
    if(input[0] !== '@') return null;
    let command = {};
    const words = input.split(' ');
    const fnArg = words[0].split(':');
    command.fn = fnArg[0].slice(1);
    command.arg = fnArg[1];
    command.text = words.slice(1).join(' ');

    return command;
};