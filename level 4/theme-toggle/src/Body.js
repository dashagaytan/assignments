import React from "react";
import ThemeContext from "./themeContext";

function Body(props){
    const {theme, toggleTheme}= React.useContext(ThemeContext)

    return(
        <div className={`${theme}-theme`}>
          
            <div className="body-container">
                <h1 className="title">Change Theme from Light to Dark</h1>
                <p className="body-p">On click of a button you can change the theme from dark to light</p>

                <button onClick={toggleTheme}>Click me</button>
            </div>
        </div>
    )
}

export default Body;