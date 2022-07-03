import React from "react";
import "./featuredproperties.css"
import Item9 from "../../images/9.jpg"
import Item10 from "../../images/10.jpg"
import Item11 from "../../images/11.jpg"
import Item12 from "../../images/12.jpg"

const FeaturedProperties = () => {
    return(<>
        <div className="fp">
            <div className="fpItem">
                <img className="fpImg" src={Item9} alt="hotel"/>
                <span className="fpName">Aparthotel Stare Marino</span> 
                <span className="fpCity">Kandy</span> 
                <span className="fpPrice">LKR 20,000</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src={Item10} alt="hotel"/>
                <span className="fpName">Hotel Lake Field</span> 
                <span className="fpCity">Kandy</span> 
                <span className="fpPrice">LKR 15,000</span>
                <div className="fpRating">
                    <button>7.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src={Item11} alt="hotel"/>
                <span className="fpName">Hotel Kings Burry</span> 
                <span className="fpCity">Colombo</span> 
                <span className="fpPrice">LKR 35,000</span>
                <div className="fpRating">
                    <button>9.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className="fpImg" src={Item12} alt="hotel"/>
                <span className="fpName">Hotel Avenra Garden</span> 
                <span className="fpCity">Negombo</span> 
                <span className="fpPrice">LKR 75,000</span>
                <div className="fpRating">
                    <button>10</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    </>)
}

export default FeaturedProperties