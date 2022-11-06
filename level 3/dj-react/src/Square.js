import React from "react";

export default function Square(props){
    return(
        <div className="square" onClick={props.clickBtn} style={{background: props.backgroundColor}}> </div>
    )
}