const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    level: {
        type: Array,
        required: true
    },
    schedule: {
        type: Array,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    questions: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    auxiliar: {
        type: String,
        required: false
    }
})

const model     = mongoose.model('Test',mySchema)
module.exports  = model
