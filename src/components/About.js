// import User from "./user";
import UserClass from "./userClass";
import React from "react";

class About extends React.Component{
    constructor(props) {
      super(props)
    
    console.log( "Parent Constructor")
    }


    componentDidMount(){
        console.log("Parent componentDidMount ")
    }
    



    render(){
        console.log( "Parent Render")
        return(
            <div className ="About"> 
            <h1>ABOUT US</h1>
    
            <h3>This is a About Us page</h3>
    
{/*      
             < User Name={"Kavya (Functional)"}  
            location={"Bengaluru"}
            Contact={"@xyz"}
             />  */}
    
    
            <UserClass Name={"Kavya (class)"}  
            location={"Bengaluru"}
            Contact={"@xyz"}
          act={"@xyz"}
            />
    
    
            </div>
        );

    }
};


export default About;