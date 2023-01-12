import React from "react";

function Generator(props){
    return(
        <div className="gradient">
            {props.children}
        </div>
    )
}

export default Generator;