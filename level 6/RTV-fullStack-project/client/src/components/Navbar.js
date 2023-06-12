import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar(props){
    return (
        <>
        {/* <h1>ThePoliticalPost</h1> */}
        <Link to="/profile">Profile</Link>
        <Link to="/public">Public</Link>
        </>
    )
}