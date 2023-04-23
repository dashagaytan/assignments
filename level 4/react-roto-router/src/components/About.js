import React from "react";
import {useNavigate} from 'react-router-dom';

function About(){

    const navigate = useNavigate()

    return(
        <div>
            <div className="about">
                <h2>The Plumbing Co.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla lobortis magna nibh, vel sollicitudin sapien bibendum eu. 
                    Fusce lacinia interdum ex, sit amet eleifend justo. 
                    Praesent tincidunt bibendum ante, at elementum eros auctor eget. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                    Vivamus sit amet semper est.</p>
            </div>
            <button style={{display: "block", margin: "0 auto", marginTop: "20px"}} onClick ={()=>navigate("/services")}>Request Services</button>
        </div>
    )
}

export default About;