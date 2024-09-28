import Employee from '../Model/employeeModel.js';
import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';

export const emplverfiction = (req,res)=>{
    const token = req.cookies.token;

    if(!token){
        return res.json({status:false})
    }

jwt.verify(token,process.env.TOKEN_KEY,

async (err,data) =>{
    if(err)
    {return res.json({status:false})
}
else{
    const employe = await Employee.findById(data.id)
    if(employe)
        return res.json({status:true,
        employe:employe.username})
else
    return res.json({status:false})   
}
})
}