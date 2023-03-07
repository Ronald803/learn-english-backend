const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cellphone: {
        type: Number,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    points: {
        type: Array,
        required: true
    },
    level: {
        type: Array,
        required: true
    },
    schedule: {
        type: Array,
        required: true
    }
})

const model = mongoose.model('User',mySchema)
module.exports = model