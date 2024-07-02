 //import { createTransport } from 'nodemailer';
 const router = require('express').Router();

const nodemailer = require('nodemailer')

const bodyParser = require('body-parser')
const endcodedurl =  bodyParser.urlencoded({extended:false})


router.get('/mailform',(req, res)=>{

    res.render('mailView')
})

router.post('/sendmail', endcodedurl, (req,res)=>{

    let email = req.body.email

    console.log(email)
    let mailTo = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "guyvagabond758@gmail.com",
            pass: "ktmwbrbkbbbtfokc",
         },
        });
       
        let mailDetail = {
        from: "guyvagabond758@gmail.com",
        to: email,
        subject: "Email by Arbaz khan madani",
        html: `<div class="card">
        <div class="card-header">
            Quote
        </div>
        <div class="card-body" style="width:100%;height:100%; background:red;">
            <blockquote class="blockquote mb-0">
            <p style="color:white;">This is just a dummy email for testing</p>
            <footer class="blockquote-footer" style="color:yellow; font-size:20px;">The very infamous <cite style="color:gold;font-size:20px;" title="Source Title">Arbaz Khan Madani</cite></footer>
            </blockquote>
        </div>
        </div>`,
        };
       
        mailTo.sendMail(mailDetail, (error, info) => {
       
            (error)?console.error("Somthing went wrong...!!! " + error):console.log("Email sent sussesfully " + info.response);
        
       
        });
 
    res.sendStatus(200)
})


module.exports = router 







