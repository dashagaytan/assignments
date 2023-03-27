import React, {useContext, useState} from "react";
import { UglyContext } from "./UglyContext";

function UglyCard(prop){
    // const [editOption, setEditOption] = useState(false)
    // const [eidtData, setEditData] = useState({
    //     title: "",
    //     description: ""
    // })

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