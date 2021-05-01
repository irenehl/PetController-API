const { Schema, model } = require('mongoose')

const Pet = new Schema({
    username: String,
    ownerId: {
        type: String, 
        required: true
    },
    species: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    race: String,
})

module.exports = model("Pet", Pet)