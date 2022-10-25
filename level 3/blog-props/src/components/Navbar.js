import React from "react";

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar--start">
                <a href="">Start Bootstrap</a>
                </div>
                <div>
                    <ul className="navbar--list">
                    <a className="navbar--item">Home</a>
                    <a className="navbar--item">About</a>
                    <a className="navbar--item">Sample Post</a>
                    <a className="navbar--item">Contact</a>

                    </ul>
                </div>
        </nav>
    )
}