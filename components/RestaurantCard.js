
const RestaurantCard=(props)=>{
    const {resData}=props;
    
   const{name,cloudinaryImageId,cuisines,avgRating,sla,cost}=resData;
    return(
        <div className="m-4 p-4.5 w-[200px] h-[300px]  bg-gray-100 hover:bg-gray-300 ">
            <div className="">
             <img  className="w-[100%] rounded-lg" alt="logo-image" src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId }
             />
              <h2 className="font-bold text-lg">{name}</h2>
              <p className="truncate">{cuisines.join(",")}</p>
              <p> ⭐{avgRating }</p>
              <p>{sla.deliveryTime}minutes</p>
            </div>
        </div>
    );

};

export const RestaurantPromoted=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute m-2 p-2 text-white bg-black">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )

    }
};

export default RestaurantCard;

