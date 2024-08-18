const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema ;
                            
const Course = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    videoId: {type: String, required: true},
    level: {type: String,  required: true},
    slug: {type: String, slug: "name", unique: true}
    // createdAt: {type: Date, default: Date.now},
    // // Store the time the records being created
    // updatedAt: {type: Date, default: Date.now},
    // // Store the time the records being updated

},{
    timestamps: true,
    // ! replace for createdAt and updatedAt
});

module.exports = mongoose.model('Course', Course);