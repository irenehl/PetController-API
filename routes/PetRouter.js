const router = require('express').Router()
const { create, getSiblings } = require('../controllers/PetController')
const { Authenticate } = require('./Authenticator')

router.post('/create', Authenticate, create)
router.post('/current', Authenticate, getSiblings)

module.exports = router