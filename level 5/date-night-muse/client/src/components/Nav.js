import React from "react";
import {Link} from 'react-router-dom'

export default function Nav(props){
    const {logout} = props
    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/stayIn">Stay In</Link>
            <Link to="/headOut">Head Out</Link>
            <button className="logout" onClick={logout}>Logout</button>
        </div>
    )
}