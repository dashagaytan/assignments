import React, {useState, useEffect} from "react";
import axios from "axios";

const MealContext = React.createContext();

function MealProvider(props){

    const searchAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState([])

    const searchMeals = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((res)=>setSearch(res.data.meals))
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        console.log("search meal nanny useEffect ran")
        searchMeals();
    })

    const handleSearchChange =(e)=>{
        const {name, value} = e.target
        setSearch(prevState => {
            return{
                ...prevState,
                 [name]: value
                }
            })
    }

    // const addFavoriteMeal =()=>{
    //     console.log('add favorite meal ran')
    //     setQuery(prevState => {
    //         return[...prevState, query]
    //     })
    // }

    return(
        <MealContext.Provider value={{
            search,
            handleSearchChange,
            searchMeals,

        }}>
            {props.children}
        </MealContext.Provider>
    )
}

export {MealProvider, MealContext};