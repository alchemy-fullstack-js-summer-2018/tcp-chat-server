const app = require('./lib/app');

const PORT = 2500;

app.on('listening', () => {
    console.log('TCP SERVER LISTENING ON PORT', PORT);
});

app.listen(PORT);