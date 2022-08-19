
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import "./Register.css"
const Register = () => {
    let navigate=useNavigate();
    const detailarr=JSON.parse(localStorage.getItem("signupdetail"))||[]
    const[user,setUser]=useState({name:"",email:"",password:""})

    const handlechange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handlesubmit=async(e)=>{
        e.preventDefault()
        const res=await fetch("http://localhost:5000/api/auth/register",{
            method:"POST",
           headers:{
            "content-type":"application/json"
           },
            body:JSON.stringify(user)

        })
        const data=await res.json();
        let userinfo={
            name:data.user.name,
            email:data.user.email
        }
        detailarr.push(userinfo);
        localStorage.setItem("signupdetail",JSON.stringify(detailarr))
        console.log(data)
        if(data.success){
            alert("Registration successful")
            navigate("/login")
        }
    }
  return (
    <div className='auth_div'>
        <h2 className='title'>Register</h2>
      <input type="text" name="name" placeholder ="Enter your name" onChange={handlechange}/><br></br><br></br>
      <input type="email" name="email" placeholder ="Enter your email" onChange={handlechange}/><br></br><br></br>
      <input type="password" name="password" placeholder ="Enter your password" onChange={handlechange}/><br></br><br></br>
    <button className='btn' onClick={(e)=>{handlesubmit(e)}}>Click to Register</button>
    </div>
  )
}

export default Register
