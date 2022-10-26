import React from "react"

export default function Footer(){
    return(
        <footer className="footer">
            <ul>
                <li className="icon"><a><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li className="icon"><a><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li className="icon"><a><ion-icon name="logo-github"></ion-icon></a></li>
            </ul>
        <div className="copyright">Copyright © Dasha Gaytan 2022</div>
        </footer>
    )
}