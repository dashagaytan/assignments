//input form: title, image, description of the ugly thing

import React,{useContext} from "react";
import { UglyContext } from "./UglyContext";

function Form(props){
    const {handleChange, handleSubmit, uglyThing} = useContext(UglyContext)

    return(
       <div className="form-card">
         <form onSubmit={handleSubmit}>
           <input
           input='text'
           name="title"
           value={uglyThing.title}
           onChange={handleChange}
           className="input"
           />
           <input
           input='text'
           name="imgUrl"
           value={uglyThing.imgUrl}
           onChange={handleChange}
           className="input"
           />
           <input
           input='text'
           name="desctiption"
           value={uglyThing.description}
           onChange={handleChange}
           className="input"
           />

           <button className="submit-btn">Submit</button>
         </form>
       </div>
    )
}

export default Form;