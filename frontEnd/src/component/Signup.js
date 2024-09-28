import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {ToastContainer, toast} from "react-toastify"
import './css/signup.css';

export const Signup = () => {

    const navigate = useNavigate();
    const[inputValue ,setInputValue] = useState({
      email:"",
      password:"",
      username:"",
    });

const{email,password,username}=inputValue;

const handleOnChange =(e)=>{
  const{name,value}= e.target;
  setInputValue({
    ...inputValue,
[name]:value,
  });
}

const handlError = (err)=>{
  toast.error(err,{
    position:"bottom-left",
  });
}

const handleSuccess=(msg)=>{
  toast.success(msg,{
    position:"bottom-left"
  });
}

const handleSubmit = async(e)=>{
  e.preventDefault();
  try{
    const {data} = await axios.post("http://localhost:3000/api/auth/signup",{...inputValue,
  },
  {withCredentials:true});

  const {success, message, employeeId}= data;
  if(success){
    handleSuccess(message);
    setTimeout(()=>{
      navigate(`/Home/${employeeId}`)
    },1000);
  }else{
    handlError(message);
  }
  }catch(error){
    console.log(error);
  }
  setInputValue({
    ...inputValue,
    email:"",
    password:"",
    username:"",
  });
};
  return (
    <div className='form_container'>
    <div className='ss'>
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <input type='email' name='email' value={email} placeholder='enter the email' onChange={handleOnChange}></input>
        </div>

        <div>
        <input type='text' name='username' value={username} placeholder='enter the username' onChange={handleOnChange}/>
        </div>

        <div>
        <input type='password' name='password' value={password} onChange={handleOnChange} placeholder='enter the password' />
        </div>
        
        

        <button type='submit'>Submit</button>
        <span>allready have an Account?
          <div className='login'>
          <Link to={'/login'}>
            <button>LOGIN</button></Link>
            </div>
        </span>
      </form>
      <ToastContainer/>
      </div>
    </div>
  )
}

