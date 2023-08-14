import { useRouteError} from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h2>Ooops</h2>
            <h1>Something went Wrong</h1>
            <h1>It is an Error page</h1>
            <h3>{err.status}-{err.statusText}</h3>
            
        </div>
    );
};
export default Error;