import React from "react";
import Comment from "./Comment";

export default function CommentsList(props){
    const { comments } = props

    return (
        <div className="comment-list">
           { (comments) ? comments.map(post => (<Comment comment={post} issueId={post.issueId} key={post._id}>{post.comment}</Comment>)) : console.log("fail") }
     </div>
    )
}