import React from "react";

export default function Navbar(){
    return(
        <nav className="navbar">
                <a href="index.html" className="navbar--brand">Start Bootstrap</a>
                <div>
                    <ul className="navbar--list">
                        <li className="navbar--item"><a href="index.html">Home</a></li>
                        <li className="navbar--item"><a href="index.html">About</a></li>
                        <li className="navbar--item"><a href="index.html">Sample Post</a></li>
                        <li className="navbar--item"><a href="index.html">Contact</a></li>
                    </ul>
                </div>
        </nav>
    )
}