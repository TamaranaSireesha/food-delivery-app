
import { useState,useEffect } from "react";
const useOnlineStatus=()=>{
    const[onlinestatus,setOnlinestatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlinestatus(true);
        });
        window.addEventListener("offline",()=>{
            setOnlinestatus(false);
        });
    },[]);
   //boolean value
    return onlinestatus;
};
export default useOnlineStatus;