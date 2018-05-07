const User = require('./models/user');
const Entry = require('./models/entry');
const Nutrition = require('./models/nutrition');
const Workout = require('./models/workout');
const Progress = require('./models/progress');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
const moment = require('moment');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

mongoose.Promise = global.Promise;

// ---------------- RUN/CLOSE SERVER -----------------------------------------------------
let server = undefined;

function runServer(urlToUse) {
    return new Promise((resolve, reject) => {
        mongoose.connect(urlToUse, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(config.PORT, () => {
                console.log(`Listening on localhost:${config.PORT}`);
                resolve();
            }).on('error', err => {
                mongoose.disconnect();
                reject(err);
            });
        });
    });
}

if (require.main === module) {
    runServer(config.DATABASE_URL).catch(err => console.error(err));
}

function closeServer() {
    return mongoose.disconnect().then(() => new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    }));
}

// ---------------USER ENDPOINTS-------------------------------------
// POST SPORT
app.post('/add-to-sport-list', (req, res) => {

    let title = req.body.title;
    let url = req.body.url;
    let image = req.body.image;
    Entry.create({
        title,
        url,
        image,
        category: 'sport'
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        if (item) {
            console.log(`Sport result added.`);
            return res.json(item);
        }
    });
});

// POST ARTS
app.post('/add-to-arts-list', (req, res) => {

    let title = req.body.title;
    let url = req.body.url;
    let image = req.body.image;
    Entry.create({
        title,
        url,
        image,
        category: 'arts'
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        if (item) {
            console.log(`Arts result added.`);
            return res.json(item);
        }
    });
});

// POST POLITICS
app.post('/add-to-politics-list', (req, res) => {

    let title = req.body.title;
    let url = req.body.url;
    let image = req.body.image;
    Entry.create({
        title,
        url,
        image,
        category: 'politics'
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        if (item) {
            console.log(`Politics result added.`);
            return res.json(item);
        }
    });
});

// POST BUSINESS
app.post('/add-to-business-list', (req, res) => {

    let title = req.body.title;
    let url = req.body.url;
    let image = req.body.image;
    Entry.create({
        title,
        url,
        image,
        category: 'business'
    }, (err, item) => {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        if (item) {
            console.log(`Business result added.`);
            return res.json(item);
        }
    });
});

//GET
app.get('/populate-favorites-list', function (req, res) {
    Entry
        .find({

        })
        .then(function (items) {
            res.json({
                items
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});

//DELETE
app.delete('/delete-from-favorites-list/:itemId', function (req, res) {

    Entry.findByIdAndRemove(req.params.itemId, function (err, items) {
        if (err)
            return res.status(404).json({
                message: 'Item not found.'
            });

        res.status(201).json(items);
    });
});



// MISC ------------------------------------------
// catch-all endpoint if client makes request to non-existent endpoint
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});

exports.app = app;
exports.runServer = runServer;
exports.closeServer = closeServer;

///////////////////////////////////////////
