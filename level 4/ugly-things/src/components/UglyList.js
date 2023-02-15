import React, {useContext} from "react";
import { UglyContext } from "./UglyContext";
import Ugly from "./Ugly";

function UglyList(props){
    const {uglyThing, handleSubmit, handleChange} = useContext(UglyContext)

    const listOfUglies = uglyThing.map((uglyImage, index) => {
        return(
            <Ugly 
                key = {uglyImage.id}
                index = {index}
                handleChange= {handleChange}
                handleSubmit = {handleSubmit}
            />
        )
    })
    return(
        <div className="uglyList">
            {listOfUglies}
        </div>
    )
}

export default UglyList;