import React, {useContext} from "react";
import UglyCard from "./UglyCard";
import { UglyContext } from "./UglyContext";

export default function UglyList(){
  const { uglyArray} = useContext(UglyContext)

return (
    <div>
        {uglyArray.map(item => {
                return (
                    <UglyCard 
                    key ={item.id}
                    id ={item.id}
                    title={item.title}
                    description = {item.description}
                    imgUrl ={item.imgUrl}
                    />
                )
            })}
    </div>
)
}