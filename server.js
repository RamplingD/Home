const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

const app = express();

const port = 3000;
const db_port = 27017;

// Connect to database
mongoose.Promise = global.Promise;
const mongoDB = mongoose.connect(config.uri, {
    useMongoClient: true
});

mongoDB
    .then( (db) => {
        console.log('Successfully connected to: ' + config.db);
    })
    .catch( (err) => {
        console.log('Could not connect to ' + config.db + '. ' + '\n', err);
    });

app.use(express.static(__dirname + 'client/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'client/dist/index.html'));
})

app.listen(port, () => {
    console.log('Listening on port: ' + port);
})