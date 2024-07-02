const router = require('express').Router()
const urlcontroller = require('../controllers/urlctrl')

router.post('/url-short', urlcontroller.generateNewShortURL)
router.get('/url-short/:id', urlcontroller.getNewShortURL)

module.exports = router