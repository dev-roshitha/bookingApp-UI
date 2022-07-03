import React from "react";
import "./searchitem.css"
import siImg from "../../images/6.jpg"

const SearchItem = () => {
    return(<>
        <div className="searchItem">
            <img src={siImg} className="siImg" alt="" />

            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartment</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio apartment with air condition</span>
                <span className="siFeatures">Entire studio | 1 bathroom | 1 full bed</span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this grate price today!</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.6</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">LKR 35,000</span>
                    <span className="siTaxOp">Include taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    </>)
}

export default SearchItem