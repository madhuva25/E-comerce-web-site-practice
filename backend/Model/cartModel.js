import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
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

}
)

export  default mongoose.model("Cart", cartSchema);