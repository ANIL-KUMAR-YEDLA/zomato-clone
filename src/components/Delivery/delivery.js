import { restaurants } from "../../data/restaurants";
import ExploeSection from "../common/exploreSection/exploreSection";
import Filters from "../common/filters/filters";
import "./delivery.css";
import DeliveryCollections from "./deliveryCollections/deliveryCollections";
import TopBrands from "./topBrands/topBrands";

const deliveryFilters=[
    {
        id:1,
        icon:<i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title:"Filters",
    },

    {
        id:2,
        title:"Rating: 4.0+",
    },

    {
        id:3,
        title:"Safe and Hygienic",
    },

    {
        id:4,
        title:"Pure Veg",
    },

    {
        id:5,
        title:"Delivery Time",
        icon:<i className="fi fi-rr-apps-sort absolute-center"></i>,
    },

    {
        id:6,
        title:"Great Offers",
    },

]

const restaurantList= restaurants;
const Delivery = () => {
    return ( 
        <div>
            <div className="max-width">
                <Filters filterList={deliveryFilters}/>
            </div>
            <div>
                <DeliveryCollections /> 
                <TopBrands/>
                <ExploeSection list={restaurantList} collectionName='Delivery Restaurants in Bangalore'/>
            </div>
        </div>
    );
}
 
export default Delivery
