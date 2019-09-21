const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const helloSchema = new Schema({
    title: String,
    author: String,
});

const Hello = mongoose.model('Hello', helloSchema);

module.exports = {
    Hello
};