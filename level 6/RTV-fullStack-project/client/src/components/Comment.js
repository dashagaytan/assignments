import React from "react";


export default function Comments(props){
    const {comment} = props

    return (
        <div className="comments">
            <p>{ comment.comment}</p>
        </div>
    )
}