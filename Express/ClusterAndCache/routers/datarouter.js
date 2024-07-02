const router = require('express').Router()
const daatcontroller = require('../controllers/datacontroller')


router.post('/movie-form-submission',daatcontroller.saveMovie)
router.get('/show-movie',daatcontroller.showMovie)

module.exports = router