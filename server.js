const app = require('./lib/app');

const PORT = 8080;

app.on('listening', () => {
    console.log('chat app started on port', PORT);
});

app.listen(PORT);