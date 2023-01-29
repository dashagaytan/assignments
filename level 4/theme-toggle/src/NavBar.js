import React from "react";
import { ThemeContext } from "./themeContext";

function NavBar(props){
    const {color} = React.useContext(ThemeContext)

    return(
        <div className="nav-bar">
        <nav className={color}>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </nav>
    </div>
    )
}

export default NavBar;