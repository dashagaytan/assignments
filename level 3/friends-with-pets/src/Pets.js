import React from "react";

export default function Pets(props){
    return(
        <div>
            <p className="pet-name">Name: {props.name}</p>
            <p className="pet-breed">Breed: {props.breed}</p>
        </div>
    )
}