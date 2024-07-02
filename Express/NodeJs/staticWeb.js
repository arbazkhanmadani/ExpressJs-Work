const http = require('http')
const url = require('url')
const fs = require('fs')


let server = http.createServer((req,resp)=>{

    const path =  req.url


    if(path==="/home" || path==="/index.html"){
        resp.setHeader("Content-Type","text/html")
            
        let home = fs.readFileSync("Nodejs/views/index.html", "utf-8")
        resp.write(home)
        resp.end()
    }
    else if(path==="/contact" || path==="/contact.html"){
        resp.setHeader("Content-Type","text/html")
            
        let contact = fs.readFileSync("Nodejs/views/contact.html", "utf-8")
        resp.write(contact)
        resp.end()
    }
    else{
        resp.setHeader("Content-Type","text/html")
        let NOTFOUND = fs.readFileSync("Nodejs/views/notfoundpage.html", "utf-8")
        resp.write(NOTFOUND)
        resp.end()
    }



    resp.end()

})

server.listen(8080)


