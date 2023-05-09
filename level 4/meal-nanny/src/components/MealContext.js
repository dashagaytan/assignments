import React, {useState, useEffect} from "react";
import axios from "axios";

const MealContext = React.createContext();

function MealProvider(props){

    const searchAPI = "www.themealdb.com/api/json/v1/1/search.php?s=Pasta"
    
    return(
        <MealContext.Provider value={{
            
        }}>
            {props.children}
        </MealContext.Provider>
    )
}

export {MealProvider, MealContext};