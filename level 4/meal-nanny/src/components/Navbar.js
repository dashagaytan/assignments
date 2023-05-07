import React from "react";
import {Link} from "react-router-dom"
import "./component-styles/Navbar.css"

function Navbar(){
    return(
        <div className="nav-bar">
            
            <div className="nav-links">
                <ul>
                    <Link className="link" to="/" style={{ padding: 5 }}><li>Home</li></Link>
                    <Link className="link" to="/randomMeal" style={{ padding: 5 }}><li>Random Meal</li></Link>
                    <div className="title"><h1>Meal Nanny</h1></div>
                    <Link className="link" to="/savedMeal" style={{ padding: 5 }}><li>My Meals</li></Link>
                    <Link className="link" to="/recipe" style={{ padding: 5 }}><li>Recipes</li></Link>

                </ul>
            </div>
          
        </div>
    )
}

export default Navbar;