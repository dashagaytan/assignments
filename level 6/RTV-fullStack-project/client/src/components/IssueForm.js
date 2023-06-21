import React, { useState } from "react";

export default function IssueForm(props){

    const { addIssue } = props  

    const initInputs = {
        title: "",
        description: ""
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevState=> ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }

    const { title, description } = inputs

    return (
        <form onSubmit={handleSubmit} className="issue-form">
            <input 
            type="text"
            name="title"
            placeholder="Issue Title"
            value={title}
            onChange={handleChange}
            />
            <input
            type="text"
            name="description"
            placeholder="Add Details"
            value={description}
            onChange={handleChange}
            />
            <button>Add Post</button>
        </form>
    )
}