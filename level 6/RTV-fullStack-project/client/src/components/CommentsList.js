import React from "react";
import Comment from "./Comment";

export default function CommentsList(props){
    const { comments } = props

    return (
        <div className="comment-list">
            { comments && 
            comments.map(post => (
                <Comment key={ post._id } comment = {post} issueId = {post.issueId}/>
            ))}
        </div>
    )
}