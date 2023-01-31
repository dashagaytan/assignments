import React from "react";
import {ThemeContext} from "./themeContext";

function Footer(props){

    const {theme} = React.useContext(ThemeContext)
    return(
        <div className={`${theme}-theme`}>
            <div className="footer">
                <p>Created by Dasha Gaytan | 2023</p>
            </div>
        </div>
    )
}

export default Footer;