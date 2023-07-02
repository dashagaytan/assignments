import React from "react";
import Comment from "./Comment.js";

export default function CommentsList(props){
    const { comments } = props


    return (
        <div className="comment-list">
          {(comments) && comments.map((comment) => (
            <Comment key={comment._id} comment={comment} issueId={comment.issue}/>
          ))}
        </div>
      );
    }