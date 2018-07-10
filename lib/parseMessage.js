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
    
    if(message.slice(1, 4) === 'all'){
        commandObj.command = 'all',
        commandObj.text = message.slice(4);
    }
    else if(message.slice(1, 6) === 'nick:'){
        commandObj.command = 'nick:',
        commandObj.arg = message.slice(6);
    }

    return commandObj;
};