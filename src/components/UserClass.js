import React from "react"


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log( this.props.Name +" Child Constructor")

    this.state ={
        count: 0,
    };
} 

componentDidMount(){
 
    console.log(this.props.Name + "Child componentDidMount ")
}

  
        
    render(){
        const {Name,location,Contact} = this.props;
           const {count} = this.state;
           console.log( this.props.Name +"Child Render")
        return(
            <div className="user-card">
            <h3>count:{count}</h3>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                });

            }}>Count Increase</button>
            <h3>Name:{Name}</h3>
            <h3>Location:{location}</h3>
            <h3>Contact:{Contact}</h3>
        </div>

        )
    }
}


export default UserClass;