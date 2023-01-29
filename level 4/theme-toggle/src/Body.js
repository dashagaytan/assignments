import React from "react";
import { ThemeContext } from "./themeContext";

function Body(props){
    const {color, toggleTheme} = React.useContext(ThemeContext)

    return(
        <div className="Main">
          
            <div className={`${color}-theme`}>
                <button onClick={toggleTheme} className={`${color}-theme`}>Click me</button>
                <p>On click of a button you can change the theme from dark to light</p>
            </div>
        </div>
    )
}

export default Body;