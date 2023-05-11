import React, {useState, useEffect} from "react";
import axios from "axios";

const MealContext = React.createContext();

function MealProvider(props){

    const searchAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState([])

    const searchMeals = (e) => {
        e.preventDefault()
            axios.get(searchAPI)
            .then((res)=>setSearch(res.data.meals))
            .catch(err => console.log(err))
    }
    useEffect(()=>{
        console.log("search meal nanny useEffect ran")
        searchMeals();
    })

    const handleSearchChange = (e) => {setQuery(e.target.value)}

    return(
        <MealContext.Provider value={{
            search,
            query,
            handleSearchChange,
            searchMeals
        }}>
            {props.children}
        </MealContext.Provider>
    )
}

export {MealProvider, MealContext};