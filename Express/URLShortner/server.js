const express = require('express')
const app = express()



const path = require('path')
console.log(path.join(__dirname, 'public'))

require('dotenv').config()
const PORT = process.env.PORT

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
//working with json......
app.use(express.json());


app.use('/static', express.static(path.join(__dirname, 'public')))

//Configuring Template engine..............
app.set("view engine","ejs")
app.set('views','views')

//Importing DBCongifuration and do confi here.........
const connectionDB = require('./config/DBConfig')
const DB_URL = process.env.DB_URL
connectionDB(DB_URL)


//configuring routes............................
const urlRouter = require('./routes/urlrouter')
app.use(urlRouter)
const formRouter = require('./routes/formRouter')
app.use(formRouter)


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})