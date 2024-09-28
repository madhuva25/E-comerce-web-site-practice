import  express from 'express';
import Order from "../Model/orderModel.js"
import Employee from "../Model/employeeModel.js"

export const  addOrder = async(req,res,next)=>{
    
    const userId = req.params.id; // Access user ID from the URL
    console.log('User ID:', userId);
    console.log(req.params); 
    //const newUser = new Employee({ userId: userId });
    const {name,cname,cadress,cpnumber,color,storage,quenty,waranty}=req.body;
 
    try{
       //let cart1 = await Employee.findOne({_id:userId});

        const order = await Order.create({name,cname,cadress,cpnumber,color,storage,quenty,waranty, userId});
        res.status(200).json(order);
        //res.status(200).json(userId);
        console.log(userId)
        
    }catch(err){ 
        console.error(err); // Log the error to the console
        res.status(401).json(err);
    }
}

// GET ALL ORDER FOE ADMIN PANNEL

export const geteOrder = async(req,res,next)=>{
    try{
     const getallorder = await Order.find()
     res.json(getallorder)
    }catch(err){
        res.json(err)
    }
     
}

//DELETE SELECTED ID
export const deleteOrder= async(req,res,next)=>{
    const orderId = req.params.id
    try{
        if(!orderId){
            res.json("order not found")
        }else{
            const deleteOrder = await Order.findByIdAndRemove(orderId)
            res.json({message: "Order successfully deleted", order: deleteOrder})
        }
    }catch(err){
            res.status(500).json({message: "An error occurred"})
        }
        
}
