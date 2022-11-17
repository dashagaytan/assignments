import React from "react";

export default function Button(props){
    return(
        <button className="btn" onClick={props.handleClick}>Roll Dice</button>
    )
} 