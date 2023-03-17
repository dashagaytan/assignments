import React, {useContext} from "react";
import { UglyContext } from "./UglyContext";

function UglyList(props){
  const { uglyThing,
    uglyArray,
    getUglyThings,
    addUgly,
    handleChange, 
    handleSubmit}= useContext(UglyContext)

    const listOfUglies = uglyThing.map(item=> {
        return (
            <>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <img src={item.imgUrl}/>
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