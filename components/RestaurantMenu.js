
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/UseRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu=()=>{
  const {resId} = useParams();
  resInfo=useRestaurantMenu(resId);
 console.log(resId);

    if(resInfo===null||resInfo===undefined){
      return <ShimmerUI/> ;
    } 

    const {name,cuisines,costForTwoMessage}= resInfo?.cards[0]?.card?.card?.info;
    const itemCard=resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(itemCard);
    const categories=resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
     // categories.filter(c=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      //   <ul>
      //  { itemCard&&itemCard.map(item=><li key={item.card.info.id}>{item.card.info.name}-{"Rs."}{item.card.info.price/100||item.card.info.defaultPrice/100}</li>)}
      // </ul>
      return(
    <div className="menu text-center p-2 my-2">
      <h1 className="font-bold text-xl">{name}</h1>
      <p className=" font-bold text-sm p-1 my-1">{cuisines.join(",")}-{costForTwoMessage}</p>
      {/* catagories accordians*/}
    
      {categories.map(
        (catagory)=()=>{
       
         
      <RestaurantCatagory data={catagory?.card?.card}/>}
     
       )
       
     } 
     
       </div>
   
      
      );

  
    
};
export default RestaurantMenu;



















//const[resInfo,setresInfo]=useState(null);
  
 
  //   useEffect(()=>{
  //   FetchMenu();
  //   },[]);
  //   const FetchMenu= async()=>{
  //     try{
  //       // const combineddata=Menu_API+resId;
  //       // console.log(combineddata);
  //  const data= await fetch(Menu_API+resId);
  //   const json=await data.json();
  //   console.log(json);
  //   setresInfo(json.data);
  //     }
  //   catch(error){
  //    console.error("Error fetching Menu:",error);
  //   }
  //    // json is linked to resinfo by using setresinfo.
  //   };
{/* <div className="menu">
      //   <h1 className="font-bold p-4 m-2">{name}</h1>
      //   <p className="m-2">{cuisines.join(",")}-{costForTwoMessage}</p>
      //   <div className="RecommendedMenu">
      //     <h4 className="font-medium">Recommended</h4>
      //    <ul>
      //     {itemCard.map(item=><li key={item.card.info.id}>{item.card.info.name}-{"Rs."}{item.card.info.price/100||item.card.info.defaultPrice/100}</li>)}
      //   </ul>
       
      //   {/* <ul>
      //     {
      //       menu2.map(menu=><li key={menu.card.info.id}>{menu.card.info.name}-{"Rs."}{menu.card.info.price/100||menu.card.info.defaultPrice/100}</li>)
      //     }
      //   </ul> */}
          
      //   </div>
      // </div> */}