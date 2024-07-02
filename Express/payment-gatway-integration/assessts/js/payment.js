

async function makeOrder(){

const form = document.getElementById('payment-form')
console.log(form)
//serialization...................
const formData = new FormData(form)

    //Options==========================
const options = { 
    
    "key": 'rzp_test_Xezm2VdTjhbNue',  
    "amount": "5000",  
    "currency": "INR", 
    "name": "Arbaz Khan", 
    "description": "buying shoes", 
     "image": "https://media.geeksforgeeks.org/wp-content/uploads/20210806114908/dummy-200x200.png", 
    "order_id": "order_HdPuQW0s9hY9AU",   
   
    "handler": function (response){ 
        console.log(response) 
        alert("This step of Payment Succeeded"); 
    }, 
    
    //user Data..............................
    "prefill": { 
       //Here we are prefilling random contact 
      "contact":"6268961995",  
        //name and email id, so while checkout 
      "name": "Arbaz Khan",   
      "email": "arbazmadani25@gmail.com"
    }, 

    //Extra info.............................
   "notes" : { 
      "description":"Best Course for SDE placements", 
      "language":"Available in 4 major Languages JAVA,C/C++, Python, Javascript", 
      "access":"This course have Lifetime Access" 
    },  

    //color theme.............................
    "theme": { 
        "color": "#2300a3" 
    } 
}; 
var razorpayObject = new Razorpay(options); 

   
}