const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

const port = 3000;
const db_port = 27017;

// Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could not connect to database:' + err);
    }

    else {
        console.log("Successfully connected to database: " + config.db);
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log('Listening on port: ' + port);
})