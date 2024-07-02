 const model = require('../models/movieModel')

const NodeCache = require('node-cache');
let cache = new NodeCache({
    stdTTL : 10 //xseconds in memory
})


const saveMovie = async(req,res)=>{

    const {name, title, rating} = req.body
    const moviedoc = await model.create({
       name,
       title,
       rating 
    })
    moviedoc.save()

    res.send("value");
}


const showMovie = async(req, res)=>{

   // console.log(cache.has("movies")+" =================key")
   // console.log(cache.get("movies")+" =================key")

     // Current page, default to 1
     const page = parseInt(req.query.page) || 1; 
     console.log(page+" ====================page")
 
     // Items per page, default to 5
     const pageSize = parseInt(req.query.pageSize) || 5;
     console.log(pageSize+" ====================pageSize")
 
     const skip = (page - 1) * pageSize;
     // Total number of posts in the database
    const totalMovie = await model.countDocuments(); 

    if(cache.has("movies")){

        console.log("In CACHE ===============================================")
        res.render("movieDataView",{ movie: cache.get("movies")});

    }
    else{


      
        console.log("In DB ===============================================")       
    
        // Sort by creation date in descending order 
        const movie = await model.find().skip(skip).limit(pageSize).sort({ createdAt: -1 }).select('-_id').select('-__v'); 
       // console.log(movie)
        //Setting Cache---------------------------------------
         //const movies = JSON.parse(movie);
        cache.set('movies', movie);
        res.render("movieDataView",{ movie, totalMovie, skip });
          
        
    }
   

}


module.exports = {
    saveMovie,
    showMovie,
}