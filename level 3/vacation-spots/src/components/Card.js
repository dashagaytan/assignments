import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <h2 className="card--place">{props.place}</h2>
            <img src={`../images/${props.img}`} />
            <h5 className="price">$ {props.price}</h5>
            <span className="timeToGo">{props.timeToGo}</span>
        </div>
    )
}