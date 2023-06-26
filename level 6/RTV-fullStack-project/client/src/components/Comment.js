import React from "react";


export default function Comment(props){
    const {comment} = props

    return (
        <div className="comments">
            <p> 💭 { comment.comment }</p>
        </div>
    )
}