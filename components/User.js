
import { useEffect, useState } from "react";

const User=(props)=>{
    useEffect(
        setInterval(()=>{
           console.log("timer")
        },1000)
       ,[]
       );
    const [count]=useState("0");
    console.log(count);
    return(
        <div className="Userclass">
            {props.name}
            <h1>{count}</h1>
        </div>
    )
}
export default User;