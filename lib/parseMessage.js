module.exports = function parseMessage(str) {
    const comObj = {};
    if(str.charAt(0) !== '@') return null;
    let splitText = str.split(' ');
    let commandText = splitText[0].split(':');
    comObj.command = commandText[0].slice(1);
    comObj.arg = commandText[1];
    comObj.text = splitText.slice(1).join(' ');
    return comObj;
};