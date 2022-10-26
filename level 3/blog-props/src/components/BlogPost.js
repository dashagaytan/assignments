import React from "react";

export default function BlogPost(props){
    return(
        <div className="blogPost">
            <h2 className="list-title">{props.title}</h2>
            <h3 className="list-subtitle">{props.subTitle}</h3>
            <p className="list-date">Posted by <a>Start Bootstrap</a> on {props.date}</p>
            <hr>
            </hr>
        </div>
    )
}