import React, { useContext } from "react";
import {UglyContext} from "./UglyContext"

function Form(props){

const {handleChange, handleSubmit, uglyData} = useContext(UglyContext)

    return(
<div>
        <h1 className="main-title">Ugly Things</h1>

        <div className="main-form">
        <form onSubmit={handleSubmit}>
            <input 
            className="form-input"
            name = "title"
            value = {uglyData.title}
            placeholder="Title"
            onChange = {handleChange}
            />
            <input 
            className="form-input"
            name = "imgUrl"
            value = {uglyData.imgUrl}
            placeholder="Image Url"
            onChange = {handleChange}
            />
            <input 
             className="form-input"
            name = "description"
            value = {uglyData.description}
            placeholder="Description"
            onChange = {handleChange}
            />
            <button className="form-btn">Add Ugly Thing</button>
        </form>
        </div>

</div>
    )
}

export default Form;

// //input form: title, image, description of the ugly thing

// import React,{useContext} from "react";
// import { UglyContext } from "./UglyContext";

// function Form(props){
//     const {handleChange, handleSubmit, uglyThing} = useContext(UglyContext)

//     return(
//        <div className="form-card">
//          <form onSubmit={handleSubmit}>
//            <input
//            input='text'
//            name="title"
//            placeholder="Title"
//            value={uglyThing.title}
//            onChange={handleChange}
//            className="input"
//            />
//            <input
//            input='text'
//            name="imgUrl"
//            placeholder="Image Url"
//            value={uglyThing.imgUrl}
//            onChange={handleChange}
//            className="input"
//            />
//            <input
//            input='text'
//            name="desctiption"
//            placeholder="Description"
//            value={uglyThing.description}
//            onChange={handleChange}
//            className="input"
//            />

//            <button type="submit" className="submit-btn">Submit</button>
//          </form>
//        </div>
//     )
// }

// export default Form;