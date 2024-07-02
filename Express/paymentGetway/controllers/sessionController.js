const router = require('express').Router()

router.get('/sessionCreate',(req,res)=>{
   
      if(req.session.pageVisit){

           req.session.pageVisit++;
           res.send("You visited this page " + req.session.pageVisit + " times");
        } else {
           req.session.pageVisit = 1;
           res.send("Welcome to this page for the first time!");
        }
})

router.get('/sessionSave',(req,res)=>{
   
    req.session.save()
    console.log(req.session.id)
    console.log(req.session.cookie)
    

    res.end()
})
router.get('/sessionDelete',(req,res)=>{
   req.session.destroy()
res.end()
})

module.exports = router