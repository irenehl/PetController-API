// ORM -> Object Relation Mapper
const { Schema, model } = require('mongose')

var Vaccine = new Schema({
    dosis: Number,
    animal: String,
    name: String,
    description: String
})

module.exports = model("Vaccine", Vaccine)
