const file = require('fs')

/*
console.log('Before Reading..................')
file.readFile('NodeJs/os.js',"UTF-8" ,(data, err)=>{

    if(data) console.log(data)
    else console.log(err)
})
console.log('After Reading..................')


file.readdir('NodeJs', 'UTF-8',(data,err)=>{
    
    if(data)
    console.log(data)
    else console.log(err)
})


let data = `

    ASDasfhsafsd
    fsdfgg
    dag
    g
    fgdf
    gh

    4234
    2343
    434
    34
    3


const code1 = `
           console.log('Hello world..............')
           console.log('Hello world..............1')
`

file.writeFile('nodejs/myjs1.js',code1 ,(err)=>{

    if(err)
         console.log(err)
    else
        console.log('file created successfuly.........')
})
`



const code = `
           console.log('Hello world..............')
           console.log('Hello world..............1')
`


file.appendFile(
    'nodejs/myjs.js',code ,(err)=>{

        if(err)
             console.log(err)
        else
            console.log('file created successfuly.........')
    }
)




file.unlink('nodejs/myjs1.js', (err)=>{

    if(err) console.log(err)
    else console.log('file deleted successfuly.........')
})

file.rmdir('nodejs',(err)=>{

    if(err) console.log(err)
    else console.log('file deleted successfuly.........')
})


//file.close()


file.mkdir('newDir1', (err)=>{


    file.writeFile('newDir1/myjs1.js','Hyyyyyyy' ,(err)=>{

        if(err)
             console.log(err)
        else
            console.log('file created successfuly.........')
    })
   
})

*/

file.open('nodejs/demo.txt', 'w+', function (err, f) {
    console.log('Saved!');
    
});
