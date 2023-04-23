import React from "react";
import {useNavigate} from 'react-router-dom';

function Home(){

    const navigate = useNavigate()

    return(
        <div className="home">
            <h2 className="home-title">Welcome to The Plumbing Co.</h2>
            <h4>Here we take care of your problems </h4>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
            <p>Nulla lobortis magna nibh, vel sollicitudin sapien bibendum eu. 
            Fusce lacinia interdum ex, sit amet eleifend justo. </p>
            <p>Praesent tincidunt bibendum ante, at elementum eros auctor eget. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
            Vivamus sit amet semper est.</p>
            
            <button style={{display: "block", margin: "0 auto", marginTop: "20px"}} onClick={()=> navigate("/services")}>Request Services</button>
            <br></br>
            <button style={{display: "block", margin: "0 auto", marginTop: "20px"}} onClick={()=> navigate("/about")}>Get to know us</button>
        </div>
    )
}

export default Home;