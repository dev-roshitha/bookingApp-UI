import React  from "react";
import "./featured.css";
import Item02 from "../../images/2.jpg";
import Item03 from "../../images/3.png";
import Item04 from "../../images/4.jpg";

const Featured = () => {
    return(<>
        <div className="featured">
            <div className="featuredItem">
                <img src={Item02} alt="hotel" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={Item03} alt="hotel" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>456 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={Item04} alt="hotel" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>789 Properties</h2>
                </div>
            </div>
        </div>
    </>)
}

export default Featured