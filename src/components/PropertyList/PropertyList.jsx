import React from "react";
import "./propertylist.css"
import Item04 from "../../images/4.jpg"
import Item05 from "../../images/5.jpg"
import Item06 from "../../images/6.jpg"
import Item07 from "../../images/7.jpg"
import Item08 from "../../images/8.jpg"

const PropertyList = () => {
    return(<>
        <div className="pList">
            <div className="pListItem">
                <img src={Item04} alt="hotel" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>123 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={Item05} alt="hotel" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartment</h1>
                    <h2>456 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={Item06} alt="hotel" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>789 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={Item07} alt="hotel" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>369 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={Item08} alt="hotel" className="pListImg" />
                <div className="pListTitles">
                    <h1>Guests</h1>
                    <h2>369 hotels</h2>
                </div>
            </div>
        </div>
    </>)
}

export default PropertyList