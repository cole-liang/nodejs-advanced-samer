const config = require('./util');

console.log(config.port)

process.on('exit', () => {
    console.log('program exit');
})

process.on("uncaughtException", (err) => {
    console.error(err);

    process.exit(1);
})

process.stdin.resume();

console.dog();