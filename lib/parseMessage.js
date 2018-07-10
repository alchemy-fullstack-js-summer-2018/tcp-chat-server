module.exports = function parseMessage(input) {
    if(input[0] !== '@') return null;
    let command = {};

    if(input.slice(1, 4) === 'all') {
        command.command = 'all';
        command.text = input.slice(5);
    }
    else if(input.slice(1, 6) === 'nick:') {
        command.command = 'nick';
        command.arg = input.slice(6).split(' ')[0];
    }
    else if(input.slice(1, 4) === 'dm:') {
        command.command = 'dm';
        command.arg = input.slice(4).split(' ')[0];
        command.text = input.slice(1 + input.indexOf(' '));
    }
    else return null;

    return command;
};