import React from "react"


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log( this.props.Name +" Child Constructor")

    this.state ={
        UserInfo:{
            name:"dummy",
            Location:"default", 
        }
    };
} 

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/kavyamanjunath2002");
    const json = await data.json();

this.setState({
    UserInfo:json
});
console.log(json)
}

componentDidUpdate(){
    console.log("componentDidUpdate")
}
  
        
    render(){
        const {name,location,avatar_url} = this.state.UserInfo;
    
        //    console.log( this.props.Name +"Child Render")
        return(
            <div className="user-card">
                <img src={avatar_url}></img>
            <h3>Name:{name}</h3>
            <h3>Location:{location}</h3>
            {/* <h3>Contact:{Contact}</h3> */}
        </div>

        )
    }
}


export default UserClass;



