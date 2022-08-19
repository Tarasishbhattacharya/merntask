import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Register.css"
const Login = () => {
    let navigate=useNavigate()
    const[user,setUser]=useState({email:"",password:""})

    const handlechange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        const res=await fetch("http://localhost:5000/api/auth/login",{
            method:"POST",
           headers:{
            "content-type":"application/json"
           },
            body:JSON.stringify(user)

        })
        const data=await res.json();
        let logininfo={
            email:user.email
        }
        // detailarr.push(userinfo);
        localStorage.setItem("logindetail",JSON.stringify(logininfo))
        console.log(data)
        if(data.success){
            alert("Login successful")
            navigate("/")
        }
    }
  return (
    <div className="auth_div">
      <h2 className='title'>LogIn</h2>
      <input type="email" name="email" placeholder ="Enter your email" onChange={handlechange}/><br></br><br></br>
      <input type="password" name="password" placeholder ="Enter your password" onChange={handlechange}/><br></br><br></br>
    <button className='btn' onClick={(e)=>{handlesubmit(e)}}>Click to LogIn</button>
    </div>
  )
}

export default Login
