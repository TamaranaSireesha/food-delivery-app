import { useState ,useEffect } from "react";
import RestaurantCard,{RestaurantPromoted} from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


 export const Body=()=>{
    const [ListOfRestaurants,setListOfRestaurants]= useState([]);
    const [searchfilter,setsearchfilter]=useState([]);
    const[search,setsearch]=useState("");
    //whenever a state variable change,react will re render the component
    console.log("bodyrendered");

     useEffect ( ()=>{
     fetchData();
    },[]);
   
    const fetchData= async ()=>{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      
    
      setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setsearchfilter(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const promoted=RestaurantPromoted(RestaurantCard);
    const onlinestatus= useOnlineStatus();
    if(onlinestatus===false) return ( <h1>Looks like you are in offline!!! connect your network </h1>);

   if( ListOfRestaurants && ListOfRestaurants.length === 0){
    return <ShimmerUI/>
   }
  
  return(
        <div className="body">
                <div className="p-5 m-5">
          
         <input type="text" className="px-3  m-3 border border-solid border-black rounded-sm" value={search} onChange={(e)=> setsearch(e.target.value)
        }/>
      <button className="px-4 py-1.5 bg-green-100 m-3 rounded-lg items-center"  onClick={()=>{
             console.log(search);
             const searchfilter=ListOfRestaurants&&ListOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(search.toLowerCase()));
             setsearchfilter(searchfilter);  
          }
        }
        
          > search</button>
          
          
          <button className="px-4 py-2 bg-yellow-50 rounded-lg" onClick={()=>{
            const filteredRating=ListOfRestaurants.filter((res) => res.info.avgRating >4);
            console.log("button clicked");
            
            setListOfRestaurants(filteredRating);
          }}>TopRatedRestaurants</button>
              
                 </div>
           
                   <div className="flex flex-wrap m-5 p-5">
            <div className="restro-cards">
       </div>
        {searchfilter&&searchfilter.map(restaurant=>

         <Link to={"/restaurants/"+ restaurant?.info.id} key={restaurant?.info.id} style={{ textDecoration: 'none' }}> 
          {restaurant.info.promoted?( <RestaurantPromoted resData={restaurant?.info }/>):(
         
         <RestaurantCard resData={restaurant?.info}/>)}
         </Link> // Link is nothing anchor tag  but by using this tag react router dom will track of this link.
                   
          )}
          </div>         {/* <h2> {ListOfRestaurant[0].info.name}</h2> */}
 
              </div>        
 );
      
   
};
export default Body;


 /* Check if ListOfRestaurants is defined and not empty before using map */
                /* RestaurantCard resData= {resList[0]} /> * for each restaturant it  will render the restaurant card */ // whenever state variable changes react re render my component*/} 
                                // whenerver something changes on UI is called "Reconcillation"*/} 
                                //whenever local state
// whenever restaurant api changes the json format also changes along with it will change the json format.
                                




























