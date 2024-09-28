import express from 'express';
import Cart from '../Model/cartModel.js';
import Employee from "../Model/employeeModel.js"

export const cartget =  async(req, res, next) =>{

    const userId = req.params.userId; // Access user ID from the URL
    console.log('User ID:', userId);
    console.log(req.params);
    //const newUser = new Employee({ userId: userId });
    const {name,color,storage,quenty,waranty}=req.body;

    try{
       let cart1 = await Employee.findOne({_id:userId});

        const cart = await Cart.create({name,color,storage,quenty,waranty, userId});
        res.status(200).json(cart);
        //res.status(200).json(userId);
        console.log(quenty,)
        
    }catch(err){ 
        console.error(err); // Log the error to the console
        res.status(401).json(err);
    }
}

export const getCart = async(req, res, next) => {
     const userid = req.params.id;
   // console.log(userid)
    let cart = await Cart.find({userId: userid});
    res.json(cart)
    //console.log(cart)

    
}

export const deleteCart = async(req, res,next) => {
    const cartId = req.params.id;
   
   
        console.log(cartId)
        
    
   try{ 
         let cart = await Cart.findOne({ _id: cartId });
        console.log(cartId)
        if(!cart){
            res.status(404).json("Cart not found");
        }else{
            await Cart.findByIdAndDelete(cart._id);  // Pass the ID of the cart to delete
        }
    
    }catch(err){
       res.status(404).json(err);
    }
}
