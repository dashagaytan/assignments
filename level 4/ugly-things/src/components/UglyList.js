import React, {useContext} from "react";
import { UglyContext } from "./UglyContext";
import Ugly from "./Ugly";

function UglyList(props){
    const {uglyThing} = useContext(UglyContext)

    const listOfUglies = uglyThing.map((uglyImage) =>{
        return(
            <Ugly 
                key = {uglyImage._id}
                uglyImage={uglyImage}
                
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