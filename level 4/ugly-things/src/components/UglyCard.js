import React from "react";

function UglyCard(props){

    return(
        <>
        <div className="uglyCard">
            <h1 className="title">{props.title}</h1>
            <img src={props.imgUrl} alt=""/>
            <h2 className="description">{props.description}</h2>
        </div>
        </>

    )
}

export default UglyCard;