import React, {useContext} from "react";
import { UglyContext } from "./UglyContext";

function UglyList(props){
  const { uglyArray, handleDelete} = useContext(UglyContext)
  
    return(
        <div className="uglyList">
      
        </div>
    )
}

export default UglyList;