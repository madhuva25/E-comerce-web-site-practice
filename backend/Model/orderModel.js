import mongoose from 'mongoose';

const orderschema = mongoose .Schema({
    name:{
        type:String,
        required:true
    },
    cname:{
        type:String,
        
    },
    cadress:{
        type:String,
        
    },
    cpnumber:{
        type:String,
        
    },

    color:{
        type:String,
        required:true
    },
    
    
    storage:{
        type:String,
        
    },
    
  
    
    /*waranty:{
        type:Strig,
        required:true
    },*/
    quenty:{
        type:String,
        required:true
    },

    userId:{
        type:String,
    }


})

export default mongoose.model("Order",orderschema)