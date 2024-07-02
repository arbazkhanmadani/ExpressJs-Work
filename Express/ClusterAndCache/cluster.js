const cluster = require('cluster')

//getting available cpus-----------------
const cpus = require('os').availableParallelism()

//importing express server from server.js-------
const app = require('./server')


if(cluster.isPrimary){
 
   // console.log('parallism ', cpus)
    console.log(`This is master server : ${process.pid}`)

    //create worker servers----------------
    for(let i = 1; i<=cpus; i++)
        cluster.fork()
    

    //if a worker died created another-----
    cluster.on('exit', (worker,code, signal)=>{
        //console.log(`worker ${worker.process.pid} died`);
       // console.log("Let's fork another worker!");
        cluster.fork();
        }
    )

}else{
   

    //We have to configure the file in which server is running not in the server is creating
    const PORT = process.env.PORT || 9090
    app.listen(PORT, ()=>{
         console.log(`server is running at port ${PORT}`)
    })


}