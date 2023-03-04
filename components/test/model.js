const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    question: {
        type: String,
        required: true
    },
    a: {
        type: String,
        required: true
    },
    b: {
        type: String,
        required: true
    },
    c: {
        type: String,
        required: true
    },
    d: {
        type: String,
        required: true
    },
    e: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    test: {
        type: Number,
        required: true
    }

})

const model = mongoose.model('Exercise',mySchema)
module.exports = model