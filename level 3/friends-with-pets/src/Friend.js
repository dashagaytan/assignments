import React from "react"
import Pets from "./Pets"


export default function Friend(props){
    const friendPets = props.pets.map(pet =>{
        return(
            <Pets
                key ={pet.id}
                name={pet.name}
                breed={pet.breed}
            />
        )
    })
    return(
        <div className="main-container">
            <h1 className="name">{props.name}</h1>
            <h3 className="age">{props.age}</h3>
            <h4>Pets:</h4>
            <div className="pets-container">
                {friendPets}
            </div>
        </div>
    )
}