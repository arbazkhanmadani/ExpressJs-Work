const route = require('express').Router()
const controllers = require('../controllers/paymentCtrl')



route.get('/product-view',controllers.productView)
route.get('/create-order', controllers.payment)


module.exports = route