const mongoose = require('mongoose')


const connectionDB = async (DB_URL)=>{
    try{
       
        const options = {
            dbName:"shorturldb"
        }
        
        await mongoose.connect(DB_URL,options)
        console.log("connected.............")
    }
    catch(err){console.log(err)}
}

module.exports = connectionDB