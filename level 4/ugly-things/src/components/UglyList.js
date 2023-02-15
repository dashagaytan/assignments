import React, {useContext} from "react";
import { UglyContext } from "./UglyContext";
import Ugly from "./Ugly";

function UglyList(props){
    const {UglyThings} = useContext(UglyContext)

    const listOfUglies = Ugly.map((thing, index ) => {
        return(
            <UglyThings 
                key = {index}
                thing ={thing}
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