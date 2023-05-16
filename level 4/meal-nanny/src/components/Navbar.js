import React from "react";
import {Link} from "react-router-dom"
import "./component-styles/Navbar.css"
import logo from "../images/mealnanny.png"

function Navbar(){
    return(
        <div className="nav-bar">
            <Link to="/"><li><img src={logo} alt="logo" className="logo"/></li></Link>
                <div className="nav-links">
                    <ul>
                        <li><Link className="link" to="/randomMeal">Random Meal</Link></li>
                        <li><Link className="link" to="/savedMeal">My Meals</Link></li>
                    </ul>
                </div>
        </div>
    )
}

export default Navbar;