import React from "react";

export default function Pets(props){
    return(
        <div>
            <p>Pet's Name: {props.name}</p>
            <p>Pet's Breed: {props.breed}</p>
        </div>
    )
}