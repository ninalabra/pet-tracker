const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    mobileNumber: {
        type: String,
        required: true
    },
    address: {
        street1: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        }
    },
    pets: [{
        petId: {
            type: String
        },
        petName: {
            type: String
        },
        petSpecies: {
            type: String
        },
        petBreed: {
            type: String
        }
    }]
})

module.exports = mongoose.model("User", userSchema);