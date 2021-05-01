const Pet = require('./models/Pet')

var PetController = {
    create: async (req, res) => {
        try {
            var newPet = new Pet({
                name: req.body.name,
                species: req.body.species,
                age: req.body.age,
                race: req.body.race,
                ownerId: req.petOwner._id
            })

            await newPet.save()
            return res.status(201).json({ error: false, message: "Creado" })
        }
        catch(err) {
            return res.status(400).json(err)
        }
    },

    getSiblings: async (req, res) => {
        try {
            var pets = await Pet.find({ ownerId: req.petOwner._id })
        }
        catch (err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = PetController