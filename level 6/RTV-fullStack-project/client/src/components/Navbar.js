import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar(props){
    const { logout } = props
    return (
        <div className="navbar">
        {/* <h1>ThePoliticalPost</h1> */}
        <Link to="/profile">Profile</Link>
        <Link to="/public">Public</Link>
        <button className="logout" onClick={logout}>Logout</button>
        </div>
    )
}