import React from "react";
import ThemeContext from "./themeContext";

function NavBar(props){
    const {theme} = React.useContext(ThemeContext)


    return(
        <div className="nav-bar">
            <nav className={`${theme}-theme`}>
                <ul>
                    <li><a className="active" href="Body.js">HOME</a></li>
                    <li><a href="#home">ABOUT</a></li>
                    <li><a href="#home">CONTACT</a></li>
                </ul>
            </nav>
      
        </div>
    )
}

export default NavBar;