import React, {useContext} from "react";
import { UglyContext } from "./UglyContext";

function UglyList(props){
    const {uglyThing,
           handleSubmit, 
           handleChange
           
        } = useContext(UglyContext)

    const listOfUglies = uglyThing.map((uglyImage) =>{
        return(
          <>
          </>
        )
    })
    return(
        <div className="uglyList">
            {listOfUglies}
        </div>
    )
}

export default UglyList;