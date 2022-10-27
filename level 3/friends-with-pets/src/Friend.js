import React from "react"
import Pets from "./Pets"


export default function Friend(props){
    const petsArr = props.pets.map(pet =>{
        return(
            <Pets
                {...pet}
            />
        )
    })
    return(
        <div className="main-container">
            <h2 className="name">Owner {props.name}</h2>
            <h3 className="age">Age: {props.age}</h3>
            <div className="pets-container">
                <h4 className="owner">{props.name}'s pets:</h4>
                    {petsArr}
            </div>
            
        </div>
    )
}