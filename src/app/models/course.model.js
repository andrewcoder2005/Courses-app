const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const Course = new Schema({
    name: {type: String, maxLength: 255},
    description: {type: String, minLength: 600},
    image: {type: String, minLength: 255},
    createdAt: {type: Date, default: Date.now},
    // Store the time the records being created
    updatedAt: {type: Date, default: Date.now},
    // Store the time the records being updated

});

module.exports = mongoose.model('Course', Course);