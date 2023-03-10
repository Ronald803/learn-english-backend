const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: {
        type: Array,
        required: true
    },
    test: {
        type: Number,
        required: true
    },
    response: {
        type: String,
        required: true
    }
})

const model = mongoose.model('Exercise',mySchema)
module.exports = model