import React from "react";
import "../components/bounty.css"

function Bounty(props){
    const {firstName, lastName, type, bounty, living} = props
    

    return (
        <div className="bounty">
            <h2>Name: {firstName} {lastName}</h2>
            <h2>Type: {type}</h2>
            <h2>Bounty: {bounty}</h2>
            <h2>Living: {living.toString()} </h2>
        </div>
    )
}

export default Bounty;