const app = require('./lib/app');

const PORT = 12345;

app.on('listening', () => {
    console.log('chat app started on port, yo', PORT);

});

app.listen(PORT);