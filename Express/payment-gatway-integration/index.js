const express = require('express'); 
const app = express()

const bodyParser = require('body-parser');
const { json } = require('body-parser');
const cors = require('cors')
const ratelimit = require('express-rate-limit') 

require('dotenv').config()
app.use(json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views','views')


//CORS===============================
const corsOptions = {
   
    'access-control-allow-origin':"http://localhost:8080/",
    method:"get, post, delete, put, patch",
    'access-control-allow-credentials':true
}
app.use(cors(corsOptions))

//Rate limiting=====================
const rateOptions = ratelimit({
    windowMS : 34*60*60*1000,
    max : 1000,
    message: 'You have exceeded the 100 requests in 24 hrs limit!', 
    standardHeaders: true,
    legacyHeaders: false,

})
app.use(rateOptions)



const router = require('./routes/router')
app.use('/api/v1',router)








const PORT = process.env.PORT && 8080
app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})