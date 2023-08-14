import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [btnName,setbtnName]=useState("LogIn");
    console.log("header rendered ");
    // if no dependency array==>useEffect is called every render
    // if dependency array is empty=[]=>useEffect is called initial once even if componet re render
    //if dependency array is=[btnName]=>it only called once dependency changes or it will called everytime when [btnName]changes
useEffect(()=>{
    console.log("useEffect called");
},[btnName]);


const defaultHandler=()=>{
    setbtnName(btnName==="LogIn"?"LogOut":"LogIn");
};
const onlinestatus=useOnlineStatus();
  
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg"> 
            <div className="logo-container">
            <img  className="w-36 "   src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>  
            </div>

           <div className=" flex items-center">
           
            <ul className="flex">  
              <li className="px-5">Online Status: {onlinestatus?"✅":"🔴"}</li>
                
                <li className="px-5"><Link to ="/">Home</Link></li>
                <li className="px-5"><Link to ="/aboutUs">About Us</Link></li>
                <li className="px-5"><Link to ="/contact">Contact Us</Link></li>
                 <li className="px-5"><Link to="/grocery">Grocery</Link></li>
                 <li className="px-8"><Link to ="/cart">Cart</Link></li>
                
             <button className="px-3" onClick={defaultHandler}>{btnName}</button>
            </ul>
           
           </div>
         

        </div>
    );
    
};
export default Header;