import React from "react";
import ThemeContext from "./themeContext";

function Footer(props){

    const context = React.useContext(ThemeContext)
    return(
        <div className={`${context}-theme`}>
            <div className="footer">
                <p>Created by Dasha Gaytan | 2023</p>
            </div>
        </div>
    )
}

export default Footer;