import React from 'react'
import "./Admin.css"
const Admin = () => {
    let data=JSON.parse(localStorage.getItem("signupdetail"));
  return (
    <div className='admin'>
        <h2 className='title'> user Signup Detail</h2>
     <table className='detail'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
          {
            data.map((elem,ind)=>{
                return <tr>
                    <td>{ind+1}</td>
                    <td>{elem.name}</td>
                    <td>{elem.email}</td>
                </tr>
            })
          }
        </tbody>
     </table>
    </div>
  )
}

export default Admin
