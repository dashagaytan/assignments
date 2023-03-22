import React, {useContext} from "react";
import { UglyContext } from "./UglyContext";

function UglyCard(prop){
    const {handleDelete} = useContext(UglyContext)
    


    return(
        <>
        <div className="uglyCard">
            <h1 className="title">{}</h1>
            <img src="" alt=""/>
            <h2 className="description">{}</h2>
        </div>
        <div>
            <button className="deleteBtn" onClick={()=>handleDelete()}>Delete</button>
        </div>
        </>

    )
}

export default UglyCard;