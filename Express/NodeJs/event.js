//1 import events module 
const EventEmmiter  = require('events')


//2.creating custom event class 
//class myEvent extends EventEmmiter{}
//const ev = new myEvent()

//3. Creating the object of EventEmmiter class

let event = new EventEmmiter()

/*
//4.Resgiter an event
event.on('run', (name)=>{

    console.log("hyyyyyyyyyyyyyyyyyy im : ", name)
})


//5. Execute the event
event.emit("run","Sakeena Roza")
event.emit("run","Neha Singh")
*/





event.once('run', (name)=>{

    console.log("hyyyyyyyyyyyyyyyyyy im : ", name)
})


//5. Execute the event
event.emit("run","Sakeena Roza")
event.emit("run","Neha Singh")


