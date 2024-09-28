import express from 'express';
import Employe from "../Model/employeeModel.js";
import bcrypt from 'bcrypt'
import { createSecretToken} from '../utils/SecretToken.js';


export const signup = async (req, res,next) => {
    try{
 
        const {email,password,username,createAt} = req.body;
        const existingUser = await Employe.findOne({email});
        if(existingUser){
            return res.json({message:"user already exists"});

        }
        const user = await Employe.create({email,password,username,createAt});
        const token = createSecretToken(user._id);
        res.cookie("token",token,{
            withCredentials: true,
            httpOnly:false,
        });

        res.status(200).json({message:"user sign in successfully", success:true,employeeId: user._id ,user});
    
   next();

    }catch(error){
        console.log(error);
    }
}

//LOGIN //////////////////////////////////////////


export const login = async (req,res,next)=>{


try{

    const { email,password} = req.body;

    if(!email || !password){
        return res.json({message:"all fields are required"});
    }
const employe = await Employe.findOne({ email});



if(!employe){
    return res.json({message:"wrong email or password"});
}

const auth = await bcrypt.compare(password,employe.password)

if(!auth){
    return res.json({message:" incorrect password or email"});
}

const token = createSecretToken(employe.id);
res.cookie("token", token,{
    withCredentials: true,
    httpOnly: false,
});

res. status(201).json({message:"user loged in successfully", success:true,employeeId: employe._id // Include the employee's ID in the response
});
next();

    }catch(err){
        console.error(err)
    }
}

export const getEmployeeuser = async(req, res, next) => {

    try {
         
        const  username  = req.params
        
        
        const employee = await Employe.findById(req.params.id);
         res.json(employee )        
        /* if (employee) {
            res.status(200).json({ username}); // Send the employee's ID in the response
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }*/
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred' ,err});
    }
}