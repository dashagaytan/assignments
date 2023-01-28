import React from "react";
import { ThemeContext } from "./themeContext";

function Main(props){
    const context = React.useContext(ThemeContext)

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
            <body>
                <p>On click of a button you can change the theme from dark to light</p>
            </body>
        </div>
    )
}

export default Main;