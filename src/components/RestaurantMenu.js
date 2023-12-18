import { useState, useEffect } from "react";






const RestaurantMenu = ()=> {

    const [ResInfo , setResInfo] = useState();

    useEffect= (()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const data = await fetch("")
        
    }
    return (
        <div className="menu">
            <h1>Name of the Resturant</h1>
            <h3> Menu</h3>
            <ul>
                <li>Biriyani</li>
                <li>Burger</li>
                <li>Diet coke</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;