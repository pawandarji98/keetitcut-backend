process.on('unCaughtException', err => {
    console.log('Caught Exception');
    console.log(err.name, err.message);
    process.exit(1);
})
const app = require('./app');


const PORT = process.env.PORT || 8000;
const server = app.listen(PORT , () => {
    console.log(`App listening on port ${PORT}`)
});

// Error handler for bad request
process.on('unhandledRejection', err => {
    console.log('Unhandled Rejection ! Shutting down.........');
    console.log( err.message);
    server.close( () => {
        process.exit(1);
    });
});