import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "./css/Login.css"
const Login = ()=> {
    const emplid = useParams().id;
    const[getempl,setGetempl]= useState([]);

    const navigate = useNavigate();
    const [inputValue,setInputValue]=useState({
        email:"",
        password:"",
    });

    
    
const{email,password}=inputValue;
const handleOnChange=(e)=>{
    const {name,value}=e.target;

    setInputValue({...inputValue,[name]:value,});
};

const handleErrors=(err)=>{toast.error(err,{position:"bottom-left"});};

const handleSuccess =(msg)=>{
    toast.success(msg,{position:"bottom-left"});
}


const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const {data} = await axios.post(`http://localhost:3000/api/auth/login/`,{...inputValue},
        {withCredentials:true})
        console.log(data);
        
        const {success, message, employeeId}= data;
        if(success){
         handleSuccess(message);
         setTimeout(() =>{
            navigate(`/Home/${employeeId}` );
         },1000);
        }else{
            handleErrors(message);
        }
    }catch(error){
        console.log(error);
    }
    setInputValue({...inputValue,
        email:"",
        password:"",});

 
        
}





  return (
    <div className='form-container'>
        <div className='mm1'>
        <h2>Login Account </h2>
        <form onSubmit={handleSubmit}>
            <div className='emaill'>
                <label htmlFor='email'>Email</label>
                <input type='email'  name='email' value={email} onChange={handleOnChange} placeholder='enter your email' />

            </div >

            <div className='passwordl'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={password}  onChange={handleOnChange} placeholder='enter your password' />
            </div>
            <div className='butoon'>
            <button type='submit' className='submitl'>Submit</button>
            <span>
                allready! haven't an account <Link to={"/signup"}>Signup</Link></span>
                </div>
                

        </form>
        </div>
        <ToastContainer/>
    </div>
      
  )
        
  
   
}


export default Login;