import React  from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(<>
        <div className="navbar">
            <div className="navContainer">
            <NavLink to="/booking-app-ui-React" className="logoLink">
                <span className="logo">Booking.com</span>
            </NavLink>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    </>)
}

export default Navbar