const router = require('express').Router()


router.get('/url-form', (req,res)=>{

    res.render('urlView')
})

module.exports = router