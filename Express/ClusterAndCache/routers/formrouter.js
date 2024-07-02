const router = require('express').Router()


router.get('/movie-form',(req,res)=>{
    res.render("movieFormView");
})


router.get('/movie-data',(req,res)=>{
    res.render("movieDataView");
})
module.exports = router