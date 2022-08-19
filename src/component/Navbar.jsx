import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="nav">
       <Link to="/">
       <div>SignUp</div>
       </Link>
       <Link to="/login">
       <div>LogIn</div>
       </Link>
       <Link to="/admin">
       <div>Admin</div>
       </Link>
    </div>
  )
}

export default Navbar