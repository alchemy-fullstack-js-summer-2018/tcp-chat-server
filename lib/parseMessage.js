module.exports = function parseMessage(str) {
    const comObj = {};
    if(str.charAt(0) !== '@') return null;
    let comSplit = str.split(':');
    let paramSplit = comSplit[1].split(' ');
    let message = paramSplit.slice(1).join(' ');
    comObj.command = comSplit[0].slice(1);
    comObj.arg = paramSplit[0];
    comObj.text = message;
    return comObj;
};