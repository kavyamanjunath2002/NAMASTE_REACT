import ResturantCard from "./ResturantCard";
import resobj from "../utlis/mockdata";
import RestaurantMenu from "./RestaurantMenu";


const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard 
                resdata={resobj}
             />;
                <ResturantCard
                resName="KFC"
                cuisins="Burger , Fast Food"
                />
                
                <RestaurantMenu/>
      
            </div>
           
        </div>
    )
}

export default Body;