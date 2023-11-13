import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement ---> Creates an object
//when we render this element in to the Dom it becomes an HTML


    const Header = () => {
        return (
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li> About </li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>

                </div>
            </div>
        )
    };

    const ResturantCard = (props) => {
        const { resName, Cuisins} = props;
        return(
            <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
                <img 
                className="res-logo"
                alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/lqfwaviwaeozczczipai "/>
                <h3>{props.resName}</h3>
                <h4> {props.Cuisins}</h4>
                <h4>4.4 stars , 38 minutes</h4>
            </div>
        );
    };




    const Body = () => {
        return (
            <div className="body">
                <div className="Search">Search</div>
                <div className="res-container">
                    <ResturantCard resName="Meghana Foods" Cuisins="Biriyani, NorthIndian" />
                     <ResturantCard  resName="KFC" Cuisins="Burger, Fastfoods"/>
                   
                </div>
            </div>
        )
    }

    const AppLayout = () => {
        return (
            <div className="app">
                <Header />
                <Body />
                

            </div>
        )
    }


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);  
// when we do root.render this pow erful library ReactDOM 
//takes this object coverts to an html and push it to the browser