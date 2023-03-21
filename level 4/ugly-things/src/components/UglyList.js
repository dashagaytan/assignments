import React, {useContext} from "react";
import UglyCard from "./UglyCard";
import { UglyContext } from "./UglyContext";

function UglyList(){
  const { uglyArray, handleDelete} = useContext(UglyContext)

const uglyThings = uglyArray.map(item => {
    return(
        <UglyCard
            <div className="uglyCard">
                <h1 className="title">{item.title}</h1>
                <img src={item.imgUrl} alt=""/>
                <h2 className="description">{item.description}</h2>
            </div>
            <div>
                <button className="deleteBtn" onClick={()=>handleDelete(item.id)}>Delete</button>
            </div>
        />
    )
})
    return(
        <div className="uglyList">
            {uglyThings}
        </div>
    )
}

export default UglyList;