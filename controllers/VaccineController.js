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

    deleteVacc: async (req, res) => {
        try {
            var ret = await Vaccine.findOneAndDelete({ _id: req.body._id })
            return res.status(200).json({ _obj : ret })
        }
        catch(error) {
            return res.status(400).json(err)
        }
    },

    getAll: async (req, res) => {
        try {
            const { page = 1, limit = 10 } = req.query

            const vaccines = await Vaccines.find()
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec()

            const cout = await Vaccine.countDocuments()

            return res.status(200).json({
                pages: Math.ceil(count / limit),
                current: page,
                vaccines
            })
        }
        catch(err) {
            return res.status(400).json(err)
        }
    }
}

module.exports = VaccineController