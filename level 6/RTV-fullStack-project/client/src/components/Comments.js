import React from "react";


export default function Comments(props){
    const {text, commentedBy} = props
    
    return (
        <>
        <p>{commentedBy.username}: </p>
        <h5>{text}</h5>
        </>
    )
}