const nodemailer = require('nodemailer')


const mailAuth =  nodemailer.createTransport({
    host:"smtp.gmail.com",
    post:process.env.EMAIL_PORT,
    auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.USER_PASS
    },
    secure:false
})

module.exports = mailAuth