//input form: title, image, description of the ugly thing

import React from "react";
import UglyList from "./UglyList";
import UglyThings from "./UglyThings";
import Footer from "./Footer"

function Form(props){

    return(
        <>
            <UglyList />
            <UglyThings />
            <Footer />
        </>
    )
}

export default Form;