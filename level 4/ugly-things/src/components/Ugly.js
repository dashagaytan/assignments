import React from "react";

function Ugly(props){
 return(
    <div>
        <h1>{props.thing.title}</h1>
        <h3>{props.thing.desctiption}</h3>
        <img src ={props.things.imgUrl} alt={props.things.title}/>
    </div>
 )
}

export default Ugly;