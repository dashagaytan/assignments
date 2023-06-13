import React, {useState} from "react";

const initInputs = {
    title: "",
    description: "",
    imgUrl: ""
}

export default function IssueForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const {addIssue} = props  //passing in a function from Profile 

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
    }

    const { title, description, imgUrl } = inputs
    return (
        <form onSubmit={handleSubmit}>
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
            <input 
            type="text" 
            name="imgUrl" 
            value={imgUrl} 
            onChange={handleChange} 
            placeholder="Image Url"/>
            <button>Add Post</button>
        </form>
    )
}