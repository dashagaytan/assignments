import React, {useState, createContext, useCallback} from "react";
import axios from "axios";

const MealContext = createContext()

function MealProvider({children}){

    const [searchMeal, setSearchMeal] = useState([])

    const searchMealNanny = useCallback((search) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(response => {
                console.log(response.data.meals)
                setSearchMeal(response.data.meals)
            })
    }, [])

    return(
        <MealContext.Provider value={{
            searchMeal,
            searchMealNanny
        }}>
            {children}
        </MealContext.Provider>
    )
}

export {MealProvider, MealContext};