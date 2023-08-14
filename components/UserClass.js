
import React from "react";
class UserClass extends React.Component{
    constructor(props){
        
        super(props);
        this.state={
            userInfo:{
                name:"dummy",
                location:"default",
            },
           };
         console.log("constructor loaded");
        }
   
  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    // Api call

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
   console.log(json);
  }
    render(){
        console.log("child rendered"+this.props.name);
          const { name, location, avatar_url,id } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
        <h5>ID:{id}</h5>
      </div>
    );
  }
}
export default UserClass;
/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */









