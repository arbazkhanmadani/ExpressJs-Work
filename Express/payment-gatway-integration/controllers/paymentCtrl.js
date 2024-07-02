const Razorpay = require('razorpay')

//Intializion th razorpay.....
var RazorpayInstance = new Razorpay(
    { 
        key_id: process.env.RAYZORPAY_KEY_ID,
        key_secret: process.env.RAYZORPAY_KEY_SECRATE
    })

//Creating order.........
RazorpayInstance.orders.create({

    amount: 5000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
        key1: "value3",
        key2: "value2"  
    }
})

  
const payment = async(req,res)=>{

    res.status(200).json({"no":"sdads"});
}





const productView = (req,res)=>{
    
    try{
        res.render('productView')

    }catch(e){
        console.log(e.message)
    }
}



module.exports = {
    payment,
    productView,
}