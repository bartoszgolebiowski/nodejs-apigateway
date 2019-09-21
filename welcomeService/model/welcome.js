const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const welcomeSchema = new Schema({
    title: String,
    author: String,
});

const Welcome = mongoose.model('Welcome', welcomeSchema);

module.exports = {
    Welcome
};