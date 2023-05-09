import React from "react";
import "./component-styles/Footer.css"

function Footer(){
    return(
        <div className="footer-container">
            <footer>
                <section>&copy; 2023 Dasha Gaytan | Meal Nanny API credits to <a className="apiLink" href="https://www.themealdb.com" alt="api">TheMealDB</a></section>
            </footer>
        </div>
    )
}

export default Footer;