import React from "react"
import spotsData from "./spotsData"
import Header from "./components/Header"
import Card from "./components/Card"

export default function App(){
    const places = spotsData.map(place =>{
        return (
            <Card
                key={place.id}
                {...place}
            />
        )
    })
    return(
        <div>
        <Header />
            {places}
        </div>
    )
}