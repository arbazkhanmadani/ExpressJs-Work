const router = require('express').Router()


router.get('/setcookie', (req,res)=>{

    res.cookie("age","22")
    res.end("cookie set...........")
})

router.get('/getcookie', (req,res)=>{

    cookie = req.cookies
    console.log(cookie)
    const json = {cookie : cookie}
    res.json(json)
})



router.get('/deletecookie', (req,res)=>{

    res.clearCookie()
    res.json("cookie cleared............")
})





module.exports = router;