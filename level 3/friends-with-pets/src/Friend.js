import React from "react"
import Pets from "./Pets"


export default function Friend(props){
    const petsArr = props.data.pets.map(pet =>{
        return(
            <Pets
                {...pet}
            />
        )
    })
    return(
        <div className="main-container">
            <h1 className="name">{props.name}</h1>
            <h3 className="age">{props.age}</h3>
            <div className="pets-container">
                <h4>Pets:</h4>
                    {petsArr}
            </div>
        </div>
    )
}