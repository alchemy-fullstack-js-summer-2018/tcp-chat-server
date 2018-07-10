const app = require('./lib/app');

const PORT = 9999;

app.on('listening', () => {
    console.log('TCP Chat started on port ', PORT);
});

app.listen(PORT);
