const route = require('express').Router()
const path = require('path')
const fs = require('fs')

//console.log(path.join(path.resolve(__dirname),'..','public/uploads/'))
//Configuring multer.....................
var multer = require('multer');  
//Configuring where to save it in folder...
savepath = path.join(path.resolve(__dirname),'..','public/uploads/')
let upload = multer({ dest : savepath}) 

//Getting File by fetch api...............
route.post('/image',upload.array('myfile', 3),(req,res,next)=>{
   //renaming file...........................
   //for 1 fiel = req.file
   //for more than1  = req.files
   console.log(req.files)

   arr = []
   req.files.forEach(elm=>{

    newname = `${savepath}${Math.round(Math.random() * 1E9)}-${elm.originalname}`

    fs.rename(`${savepath}${elm.filename}`, newname, (err)=>{
       if(err)console.log(err)
    }) 
    
    arr.push(newname)
   })
   console.log(arr)
   res.render("fileUploadView",arr);     
}) 

//Running fileUploadView.................
route.get('/fileUploadView', (req,res)=>{

   res.render("fileUploadView");
})

module.exports = route