const mongoose = require('mongoose')


const Schema = mongoose.Schema({

    name:{type:String,required:true,trim:true},
    title:{type:String,required:true,trim:true},
    rating:{type:Number,required:true},
    
})


const movieModel = mongoose.model('movies', Schema)
console.log("UserModel........................")
module.exports = movieModel