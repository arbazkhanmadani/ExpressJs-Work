const mongoose = require('mongoose')

const URLSchema = mongoose.Schema(
    {

    shortID:{type:String,required:true,unique:true,trim:true},
    redirectURL:{type:String,required:true,trim:true},
    visitHistory:[{ timestamp: {type:Number} }],

},
    {timestamps:true}
)

const URLModel = mongoose.model("URLModel",URLSchema)
console.log("UserModel........................")
module.exports = URLModel