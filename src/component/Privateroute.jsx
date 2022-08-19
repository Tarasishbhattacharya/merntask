import { Navigate } from "react-router-dom";




export const Privateroute=({children})=>{
    let data=JSON.parse(localStorage.getItem("logindetail"));
    if(data.email==="admin@gmail.com"){
        return children
    }
    return <Navigate to="/login"/>
}
