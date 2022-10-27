import React from "react";

export default function Card(props){
    return(
        <div className="card"> 
            <h2 className="card--place">Place: {props.place}</h2>
            <img className="places-img" src={props.img} alt="places"/>
            <h5 className="price">$ {props.price}</h5>
            <span className="timeToGo">Best time for travel: <b>{props.timeToGo}</b></span>
        </div>
    )
}