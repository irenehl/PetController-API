const Vaccine = require('./models/Vaccine')

var VaccineController = {
    create: async (req, res) => {
        try {
            var newVaccine = new Vaccine({
                dosis: req.body.dosis,
                animal:req.body.animal,
                name: req.body.name,
                description: req.body.description
            })

            await newVaccine.save()
            return res.status(201).json({ error: false, message: "Creado" })
        }
        catch(err) {
            return res.status(400).json(err)
        }
    },

    login: async (req, res) => {
        try {
            var ret = await Vaccine.findOneAndDelete({ _id: req.body._id })
            return res.status().json({ _obj : ret })
        }
        catch(error) {
            return res.status(400).json(err)
        }
    }
}

module.exports = VaccineController