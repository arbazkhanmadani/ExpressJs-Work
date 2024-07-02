const router = require('express').Router()

const DBConnection = require('../model/mysqlModel')
const ErrorHandler = require('./errors/ErrorHandler')

//const passport = require('passport')
//const LocalStrategy = require('passport-local').Strategy

router.get('/signupView', (req,res)=>{

    res.render('signupView')
})


router.post('/signup', async (req,res)=>{

    let username = req.body.name.replace(" ","_")
    let password = req.body.pass
    
    let msg = await DBConnection.inserUser(username, password)
    console.log(msg)
    if(msg==="success"){
        console.log(username)
     res.render('loginView',{uname:username,pass:password})
    }
    else res.redirect('/signup')
  
})

  

router.post('/login', async (req,res)=>{

    let user = await DBConnection.validateUser(req.body.username,req.body.password)
   
    if(user[0]===-1){
        res.redirect('/signup')
    }
    else if(req.body.username===user[0] && req.body.password===user[1])
        res.redirect('/dashboard')
   
})

router.get('/dashboard', (req,res)=>{

    res.render('dashboardView')
})

router.get('/logout',(req,res)=>{

    req.logOut()
    res.render('indexView');
})


router.get('/notfound/:name', (req,res,next)=>{

    
    if(req.params.name!=="arbaz")
         next(ErrorHandler.pageNotFound(404, "Not Found"));
    else
        res.render('notfoundView')
})

module.exports = router