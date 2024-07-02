//1st way........................
//import { connect } from 'mongoose'

//2nd way........................
import { connect, Schema, model } from 'mongoose'

//Step1 -> Establising Connection..................................
connect(process.env.DB_URL || "mongodb://127.0.0.1:27017/mydb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log("connection created Succcessfuly.........."))
.catch((err) => console.log("connection unsucccessful..........\n", err))

//Just For Checking Asynchronousity........................        
console.log("hyyyyyyyyyyyyyyyyy")


//Step2 -> Creating Schema..................................
const mySchema = new Schema({

    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    branch: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    college: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    fees: {
        type: Number,
        required: true,
        minlength: 3,
        maxlength: 10
    }
})
console.log("Schema created Successfuly.........")



//Step3 -> Creating Model..................................
//It returns MongoS Collection as a Class...................
const CollectionTable = new model('LNCTStudents', mySchema)
console.log("Model created Successfuly.........")


//Just For Checking Asynchronousity........................        
console.log("Heloooooooooooooo")

//Step4 -> Inserting data in Model..................................
//It is a class(collectionTable) whichwork as MongoDb's Collection..
const CreatingDocument = async () => {

    try {


        const record1 = new CollectionTable({
            name: 'Tabish Delvi',
            branch: 'CSE',
            college: 'LNCTS',
            fees: 10000
        })
        //For Inserting manyRecords.......... 
        const record2 = new CollectionTable({
            name: 'Tabish Delvi',
            branch: 'CSE',
            college: 'LNCTS',
            fees: 10000
        })


        //Step5 -> Procesing the Collection..................................
        //Save,update,delete etc the data retured by collection..............
        //Inserting One Record have to use 1 created Record name.............
        //const result1 = await record1.save()

        //Inserting Many Record have to use return Collection class name
        // and insertMany() function which takes [] of reocrd..................
        const result2 = await CollectionTable.insertMany([record1, record2])
        console.log(result2)
    }
    catch (err) {
        console.log(err)
    }
    return result2;
}

//Calling Function............
export default CreatingDocument



