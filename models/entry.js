"use strict";

const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
