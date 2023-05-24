const router = require('express').Router()
const api = require('../controllers/apiController')

router.get('/api/getall', api.getAll)

module.exports = router
