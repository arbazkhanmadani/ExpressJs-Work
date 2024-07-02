const mysql = require('mysql')
const mysqlPromise = require('mysql2/promise')




class DBConnection{

    static getConnection(){
 
        const con = mysql.createConnection({
            host: '127.0.0.1',
            post:3306,
            user: 'root',
            password: 'root',
            database: 'mydb'
          })

          return con 
    }



    static insert(name,select,check1,check2,radio){

        console.log(name+" name")
         console.log(select+" slect")
         console.log(check1+" chekeck1")
         console.log(check2+" chel2")
         console.log(radio+" radio")
           
       let con = DBConnection.getConnection() 
       
        con.connect((err)=>{
            if(err) console.log(err)
            else{
                console.log("connected................")

                let q = "insert into info values(?,?,?,?,?)"
                con.query(q,[name,select,check1,check2,radio], (err)=>{
                    
                    if(err)console.log(err)
                    else console.log("query executed.........")
                })
            }

          })         
    }

    static async inserUser(username, password){

        let con = await DBConnection.getConnection()
        await con.connect(err =>{return err})
        let query = await con.query("insert into user values(?,?)",[username, password])
        
        if(query) return "success"
        else null
       /* con.connect((err)=>{

            if(err) console.log(err)
            else{
               let q = "insert into user values(?,?)"
                con.query(q,[username, password], (err)=>{
                    
                    if(err)console.log(err)
                    else console.log("query executed.........")
                })
            }

          })*/
    }


    static async validateUser(username, password){

        const connection = await mysqlPromise.createConnection({
            host: '127.0.0.1',
            post:3306,
            user: 'root',
            password: 'root',
            database: 'mydb'
          });
        const [rows] = await connection.execute("select * from user where username=? and password=?",[username,password]) 
        
        if(Array.isArray(rows) && rows.length === 0) return [-1]
        else return [rows[0].username, rows[0].password]
      
    }


}



module.exports = DBConnection