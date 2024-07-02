const express = require("express");
const app = express()
const path = require("path");
require('dotenv').config()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))

//EJS-------------------------------
app.set('view engine', 'ejs')
app.set('views', 'views')

//Public-----------------------------
app.use(express.static(path.join(__dirname, '/public')))
console.log(path.join(__dirname, '/public'))



//DBConfig--------------------------
const db = require('./config/getdbconnection')
db(process.env.DB_URL)

//Router----------------------------
const datarouter = require('./routers/datarouter')
const formrouter = require('./routers/formrouter')
app.use(datarouter);
app.use(formrouter);

app.get('/', (req,res)=>{
    res.send("Hyyyyyyyyyyyyyyyyyyyy yeahhhhhhhhhhhh")
})



module.exports = app