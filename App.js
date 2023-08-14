import React ,{lazy,Suspense}from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
//React.createElement =>Object
import { createBrowserRouter,RouterProvider ,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
//import About from "./components/About";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

//import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading==whenever user is requested then only load 
// dynamix imoprt

const Grocery = lazy(() => import("./components/Grocery"));
//const Grocery=lazy(()=>import("./components/Grocery"));
const Applayout=()=>{
return(
    <div className="App">
         <Header/>
         <Outlet/>
    </div>
   
);


};

const appRouter=createBrowserRouter([
   {
    path:"/",
    element:<Applayout/>,
    children:[
        { 
            path:"/",
            element:<Body/>

        },
        {
            path:"/AboutUS",
            element:<AboutUs/>
        
           },
           {
            path:"/Contact",
            element:<Contact/>
           },
           {
            path:"/Grocery",
            element:<Suspense fallback={<h1>Loading...............</h1>}><Grocery/></Suspense>
           },
           {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
           }

    ],
    errorElement:<Error/>
   },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);