import React, {useState, useEffect, createContext} from "react";
import axios from "axios";

const MealContext = createContext()

function MealProvider({children}){

    const [search, setSearch] = useState([])
    const [query, setQuery] = useState('')

    const searchMeals = (e) => {
        e.preventDefault()
        axios.get(`shttps://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(res => setSearch(res.data.meals))
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        console.log("search meal nanny useEffect ran")
        searchMeals();
    },[])

    function handleSearchChange(e){
        setQuery(e.target.value)
    }

    return(
        <MealContext.Provider value={{
            search,
            searchMeals,
            handleSearchChange
        }}>
            {children}
        </MealContext.Provider>
    )
}

export {MealProvider, MealContext};