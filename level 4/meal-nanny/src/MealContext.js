import React, {useState, createContext} from "react";
import axios from "axios";

const MealContext = createContext()

function MealProvider({children}){

    //setup useState for user to search meal by name, and save found meals into an array. 
    const [searchMeal, setSearchMeal] = useState("")
    const [meals, setMeals] = useState([])
    const [savedMeals, setSavedMeals]=useState([])
    const [viewRecipe, setViewRecipe] = useState([])

    //axios get request to fetch meals being search 
    const searchMealNanny = () => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
            .then(res => {
                console.log(res.data.meals)
                setMeals(res.data.meals)
            })
             .catch(err => {console.log(err)})
    }

    const handleSearch = (e) => {
        e.preventDefault();
        searchMealNanny();
    }

    function handleAddToMyMeals(meal){
        setSavedMeals([...savedMeals, meal])
        alert(`Meal was added to "My Meals"`)

    }

    function getRecipe(recipe){
        setViewRecipe([...viewRecipe, recipe])
    }

    return(
        <MealContext.Provider value={{
            handleSearch,
            meals,
            searchMeal,
            setSearchMeal,
            handleAddToMyMeals,
            savedMeals,
            getRecipe,
            viewRecipe
        }}>
            {children}
        </MealContext.Provider>
    )
}

export {MealProvider, MealContext};