module.exports = function parseMessage(message) {
    /*
    1. Test that it 'ignores strings that do not start with @'
    * Test that `null` is returned when passed a string that does not start with "@"
    2. Test that a string like `'@cmd:param some text'` returns an object like:
    ```js
    return an object like this
    { 
        command: 'cmd',
        arg: 'param',
        text: 'some text'
    }
    */ 
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