const PetOwner = require('./models/PetOwner')
const jwt = require('jsonwebtoken')
const { restart } = require('nodemon')

var PetOwnerController = {
    create: async (req, res) => {
        try {
            var petOwner = PetOwner.findOne({ username: req.body.username })

            if(petOwner !== null)
                throw { error: true, message: "Username alredy exits"}

            var newPetOwner = new PetOwner({
                username: req.body.username,
                password: req.body.password
            })

            await newPetOwner.save()

            return res.status(201).json({ error: false, message: "Creado" })
        }
        catch(err) {
            return res.status(400).json(err)
        }
    },

    login: async (req, res) => {
        try {
            var petOwner = await PetOwner.findOne({ username: req.body.username })

            if(petOwner == nul)
                throw { error: true, message: "Incorrect user"}
            
            if(petOwner.password !== req.body.password)
                throw { error: true, message: "Wrong password"}
            
            const token = jwt.sign({ _id: petOwner._id }, process.env.TOKEN_KEY)

            return res.status(200).json({ error: false, message: "Success", token: token})
        }
        catch(error) {
            return res.status(400).json(err)
        }
    }
}

module.exports = PetOwnerController