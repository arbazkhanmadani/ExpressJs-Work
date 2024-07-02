const path = require('path')
//Configuring express module..............
const express = require('express')
//getting obj of exprerss.................
app = express()

//body parser.............................
const bodyParser = require('body-parser')
const encodedURL = bodyParser.urlencoded({extended:false})
app.use(encodedURL)

//configuring session.....................
var session = require('express-session');
app.use(session(
    { secret:"it is requirer to give this arg",
      resave:false,
      saveUninitialized:true,
      cookie :{secure:false, maxAge:60000}
    } 
))

//configuring cookie.......................
const cookieParser = require('cookie-parser')
app.use(cookieParser())

//passporjs...............................
/*const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
app.use(passport.initialize())
app.use(passport.session())

const DBConnection = require('./model/mysqlModel.js')
passport.use(new LocalStrategy((name, pass, done)=> {
    
    let con = DBConnection.getConnection()
    console.log(con)
    con.query('SELECT * FROM users WHERE username = ?', [ name ], function(err, user) {
        console.log(user)
      if (err) { console.log(err); return done(err); }
      if (!user) { return done(null, false, { message: 'Incorrect username or password.' }); }
  
      if(!user.password==pass){ return done(null, false, { message: 'Incorrect password.' }); }

      return done(null, user)
    });
    }

  ));
  passport.serializeUser((user,done)=>{
    if(user) return done(null, user.id)

    return done(null,false)
 })
 passport.deserializeUser(  (uid, done)=>{
    
    let con = DBConnection.getConnection()
    console.log(con)
    user = con.query('SELECT * FROM users WHERE username = ?', [uid])

    if(user.username) return done(null,user.uid)

    return done(null,false)
 })
*/

//Congiguring .env file...................
require('dotenv').config()

//port....................................
const PORT = process.env.PORT || 9090

//Importing router.........................
const homeRouter = require('./controllers/homeCtrl.js')
const postRouter = require('./controllers/postRequestController.js')
const cookieRouter = require('./controllers/cookieController.js')
const sessionRouter = require('./controllers/sessionController.js')
const mailRouter = require('./controllers/emailController.js')
const authenticationRouter = require('./controllers/authentication.js')
const ErrorHandler = require('./controllers/errors/ErrorHandler.js')
const fileUploadRouter = require('./controllers/fileuploading.js')
//Cofiguring Router........................
app.use(homeRouter);
app.use(postRouter);
app.use(cookieRouter);
app.use(sessionRouter)
app.use(mailRouter)
app.use(authenticationRouter);
app.use(fileUploadRouter)
//We can also segt prefix..................
//app.use('/api',homeRouter)

//All the error which are thrown by exprees are come here bcz we configured it....
app.use((err,req,res,next)=>{

    console.log(err instanceof ErrorHandler)
    if(err instanceof ErrorHandler){

        console.log(err.message, " ", err.status)
        res.status(404).json({ 
            error :{
                "status":404,
                "messgae":err.message
            }
        });
     }
     else{
        res.status(500).json({
            error:{
                "status":500,
                "messgae":"Page Not Found"
            }
        })
     }

    
})

//Configuring Template engine..............
app.set("view engine","ejs")
app.set('views','views')

//Configuring public folder................
app.use('/static', express.static(path.join(__dirname, 'public')))
//console.log(path.join(__dirname)+'\\public')




app.listen(PORT, () => {
    console.log(`Server started on port at ${PORT}`);
});

