const http = require('http')
const fs = require('fs')


http.createServer((request, response)=>{

    fs.readFile('nodeJs/nodeServer.html','utf-8',(data, err)=>{
       
       
        if(data){
            response.setHeader(200, {'Content-Type':'text/html'})
       
           // console.log(data)
            response.write(data)
            response.write("hyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
            response.end(data)
        }
        else{
            console.log(err)
        }

    })
    
    response.end()
}).listen(8080)