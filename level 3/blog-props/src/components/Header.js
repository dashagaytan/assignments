import React from "react";
import Navbar from "./Navbar"

export default function Header(){
    return(
        <header className="header" > 
            <Navbar />
            <h2 className="title">Clean Blog</h2>
            <p className="subtitle">A Blog Theme by Start Bootstrap</p>
        </header>
        
    )
}