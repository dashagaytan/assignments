import React from "react";
import { ThemeContext } from "./themeContext";

function Footer(props){

    const {color} = React.useContext(ThemeContext)
    return(
        <>
            <div className={color}>

            </div>
        </>
    )
}

export default Footer;