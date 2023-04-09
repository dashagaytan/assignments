import React, { useContext } from "react";
import UglyCard from "./UglyCard";
import { UglyContext } from "./UglyContext";

function UglyList(){
    const {uglyList} = useContext(UglyContext)

    return (
        <div className="list-container">
        {uglyList.map((item, _id) => {
            return(
                <UglyCard 
                key = {item._id}
                id = {item._id}
                title = {item.title}
                imgUrl ={item.imgUrl}
                description ={item.description}
                />
            )
        })}
        </div>
    )
}

export default UglyList;

// import React, {useContext} from "react";
// import UglyCard from "./UglyCard";
// import { UglyContext } from "./UglyContext";

// export default function UglyList(){
//   const {uglyArray} = useContext(UglyContext)

// return (
//     <div>
//         {uglyArray.map(item => {
//                 return (
//                     <UglyCard 
//                         key ={item.id}
//                         id ={item.id}
//                         title={item.title}
//                         description = {item.description}
//                         imgUrl ={item.imgUrl}
//                     />
//                 )
//             })}
//     </div>
// )
// }