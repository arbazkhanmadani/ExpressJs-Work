const router = require('express').Router()

//Importing model.....................................
const model = require('../model/mysqlModel')

//Configuring body parser for POST request.............
const bodyParser = require('body-parser')
const encodedURL = bodyParser.urlencoded({extended:false})

//Rendering postDataView file...............
router.get('/postDataejs',(req,res)=>{

    res.render('postDataView')
})

router.post('/postdata',encodedURL, (req,res)=>{

        let name = req.body.myname
        let selection = req.body.selection
        let check1 = req.body.check1
        let check2 = req.body.check2
        let radio = req.body.gender
        
        
        model.insert(name,selection,check1,check2,radio)
        let json = {
            name:name,
            select:selection,
            check1:check1,
            check2:check2,
            radio:radio
        }
        res.end(JSON.stringify(json))
})

module.exports = router