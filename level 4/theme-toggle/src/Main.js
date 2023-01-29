import React from "react";
import { ThemeContext } from "./themeContext";

function Main(props){
    const {color, toggleTheme} = React.useContext(ThemeContext)

    return(
        <div className="Main">
            <div className="nav-bar">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>
            <div className="toggle">
                <button onClick={toggleTheme} className={`${color}-theme`}>Click me</button>
                <p>On click of a button you can change the theme from dark to light</p>
            </div>
        </div>
    )
}

export default Main;