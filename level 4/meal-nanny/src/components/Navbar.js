import React from "react";
import {Link} from "react-router-dom"
import "./component-styles/Navbar.css"

function Navbar(){
    return(
        <div className="nav-bar">
            
            <div className="nav-links">
                <ul>
                    <Link className="link" to="/"><li>Home</li></Link>
                    <Link className="link" to="/randomMeal"><li>Random Meal</li></Link>
                    <div className="title"><h1>Meal Nanny</h1></div>
                    <Link className="link" to="/savedMeal"><li>My Meals</li></Link>
                    <Link className="link" to="/recipe"><li>Recipes</li></Link>

                </ul>
            </div>
          
        </div>
    )
}

export default Navbar;