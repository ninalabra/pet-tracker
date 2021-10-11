const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Pet", petSchema);