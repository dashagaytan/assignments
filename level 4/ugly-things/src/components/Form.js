//input form: title, image, description of the ugly thing

import React from "react";
import UglyList from "./UglyList";
import UglyThings from "./UglyThings";

function Form(props){

    return(
        <>
            <UglyList />
            <UglyThings />
        </>
    )
}

export default Form;