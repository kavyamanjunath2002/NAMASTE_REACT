import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <About/>
            
         
            

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>)
