import React, { useState } from "react";

export default function CommentsForm(props){
const [inputs, setInputs] = useState({text: " "})
const {_id, addComment} = props

function handleSubmit(e){
    e.preventDefault();
    addComment(_id, inputs)
    setInputs(inputs)
}

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevState=> ({
        ...prevState,
        [name]: value
    }))
}

    return(
        <form onSubmit={handleSubmit}>
            <textarea
            name="text"
            value={inputs.text}
            onChange={handleChange}
            placeholder = "Leave a comment..."/>
            <button>Post Comment</button>
        </form>
    )
}