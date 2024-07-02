const router = require('express').Router()
const fs = require('fs')

//Second way.....................
//const express = require('express')
//const router = express.Router();




router.get('/home', (req, res) => {

  
   
    /*const jsonFilePath = path.resolve(__dirname)
    //console.log(path.join(jsonFilePath,'..','data.json'))
    const fullPath = path.join(path.resolve(__dirname),'..','public/data.json');
   // const jsonData = fs.readFileSync(fullPath,'utf-8')
    //console.log(jsonData)
    data = fs.readFile(fullPath,'utf-8', (data, err)=>{
        if(err)console.log(err)
        else   console.log(data)
    })*/


    let name = req.query.name
    let age = req.query.age

    res.render('indexView', {title:"HOME - Paymentgateway", name:name, age:age})   
});

module.exports = router;