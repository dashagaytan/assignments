import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Services(){
    const navigate = useNavigate()

    return(
        <div>
            <div className="form-container">
            <form>
            <h2 className="serv-title">Fast and reliable Plumbing Srvices</h2>
            <p className="serv-p">Requst More Information</p>
                <input
                className="input"
                type="text"
                name="name"
                placeholder="Your Name"
                />

                <input
                className="input"
                type="email"
                name="email" 
                placeholder="Email"
                />

                <textarea
                className="message"
                name="message"
                placeholder="Leave your questions here"
                />

                <button>Submit</button>
            </form>
           </div>
           <button style={{display: "block", margin: "0 auto", marginTop: "20px"}} onClick={()=> navigate("/")}>Home</button>
        </div>
    )
}

export default Services;