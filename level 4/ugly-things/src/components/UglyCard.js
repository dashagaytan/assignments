import React, {useContext} from "react";
import { UglyContext } from "./UglyContext";

function UglyCard(prop){
    const {handleDelete,} = useContext(UglyContext)

//     <div className="uglyCard">
//     <h1 className="title">{item.title}</h1>
//     <img src={item.imgUrl} alt=""/>
//     <h2 className="description">{item.description}</h2>
// </div>
// <div>
//     <button className="deleteBtn" onClick={()=>handleDelete(item.id)}>Delete</button>
// </div>
}

export default UglyCard;