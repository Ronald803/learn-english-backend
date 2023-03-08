const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password:{
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
        type: String,
        required: true
    },
    schedule: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    characteristic:{
        type: String,
        required: true
    }
})

const model = mongoose.model('User',mySchema)
module.exports = model