const mongoose  = require('mongoose');

const Schema    = mongoose.Schema;
const mySchema = new Schema({
    letter: {
        type: String,
        required: true
    },
    numberOfWinners: {
        type: Number,
        required: true
    },
    winners: {
        type: Array,
        required: true
    },
    state: {
        type: Boolean,
        required: true
    }
})

const model     = mongoose.model('Stop',mySchema);
module.exports  = model;