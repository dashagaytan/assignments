import React from "react";
import Comment from "./Comment.js";

export default function CommentsList(props){
    const { comment } = props


    return (
        <div className="comment-list">
          {(comment) && comment.map((comment) => (
            <Comment key={comment._id} comment={comment} issueId={comment.issue}/>
          ))}
        </div>
      );
    }