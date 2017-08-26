const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const bodyParser = require('body-parser'); // Delete if not used later...

const app = express();

const port = 3000;
const db_port = 27017;

// Connect to database
mongoose.Promise = global.Promise;

const options = {
    useMongoClient: true
}
const mongoDB = mongoose.connect(config.uri);

mongoDB
    .then( (db) => {
        console.log('Successfully connected to: ' + config.db);
    })
    .catch((err) => {
        console.log(config.uri);
        console.log('Could not connect to ' + config.db + '. ' + '\n', err);
    });

// Static
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(port, () => {
    console.log('Listening on port: ' + port);
})