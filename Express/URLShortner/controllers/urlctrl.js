const shortid = require('shortid')
const URLModel = require('../models/urlmodel')



async  function generateNewShortURL(req, res){

    const request = req.body

    urlFormate = request.url.startsWith('https')
    console.log(urlFormate)
    console.log(request.url)
    if(!request.url || !urlFormate ) return res.status(400).json({error:"url is required..."})

    const sid = shortid(6)
    const doc = await URLModel.create({
        shortID : sid,
        redirectURL : request.url,
        visitedHistory : [],
    })
    doc.save()
     res.json({id:sid});
}



const getNewShortURL = async(rq, res)=>{

    const shortID = req.params.id
   
    const entry =  await URLModel.findOneAndUpdate(
        {
            shortID,
        },
        
        {
            $push :{
                visitedHistory:{    
                    timestamps: Date.now()
                },
            },
        }
        );

        console.log(entry)
        req.redirect(entry.redirectURL)

}

module.exports = {
    generateNewShortURL,
    getNewShortURL
}