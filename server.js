const app = require('./lib/app');

const PORT = 12345;

app.on('listening', () => {
    // why does VS Code think console.log is a variable?
    // console.log('chat app started on port, yo', PORT);

});

app.listen(PORT);