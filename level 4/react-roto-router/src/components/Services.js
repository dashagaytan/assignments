import React from "react";

function Services(){
    return(
        <div className="form-container">
            <form>
            <h2 className="serv-title">Fast and reliable Plumbing Srvices</h2>
            <p className="serv-p">Requst More Information</p>
                <input
                className="input"
                type="text"
                name="name" required
                placeholder="Your Name"
                />

                <input
                className="input"
                type="email"
                name="email" required
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
    )
}

export default Services;