import React from "react";


export default function Comment(props){
    const {comment} = props

    return (
        <div className="comments">
            <br></br>
            <p className="comments"> 💭 { comment.comment }</p>
        </div>
    )
}