import React, {useState, useEffect} from "react";
import axios from "axios";

const MealContext = React.createContext();

function MealProvider(props){

    const [search, setSearch] = useState([])
    const [mealList, setMealList] = useState([])
    const [savedMeals, setSavedMeals] = useState([])
    
   function searchMeals(){
    
    axios.get()
   }
    return(
        <MealContext.Provider value={{
            
        }}>
            {props.children}
        </MealContext.Provider>
    )
}

export {MealProvider, MealContext};