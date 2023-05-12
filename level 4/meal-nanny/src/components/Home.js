import React, {useContext, useState} from "react";
import {MealContext} from "../MealContext";
import {useNavigate} from 'react-router-dom';
import "./component-styles/Home.css"

function Home(){
    const {searchMealNanny, searchMeal} = useContext(MealContext)
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const handleSearchChange =(e)=>{
        setQuery(e.target.value)
    }

    return(
        <div className="home">
            <div className="home-form">
            <h2>Meal Nanny is here to help 🥘</h2>
            <p>What do you want to cook? 🍲</p>
                <form onSubmit={searchMealNanny}>
                    <input
                    type="text"
                    value={query}
                    placeholder="Type in what you're craving... "
                    onChange={handleSearchChange}
                    />
                    <button>Search Meal Nanny</button>
                </form>
            </div>
                <div className="search-grid">
                    {searchMeal ? (
                        searchMeal.map(meal => {
                            return (
                                <div className="search-card" key={meal.idMeal}>
                                    <h3>{meal.strMeal}</h3>
                                    <img src={meal.strMealThumb} alt=""/>
                                    <p>{meal.strInstructions}</p>
                                    <p>{meal.strCategory}</p>
                                </div>
                            )
                        })
                    )
                :
                (<h2>Meal Nanny can't find this recipe...Try another...</h2>)}
                </div>
            <br>
            </br>
            <p>Can't decide? Let Meal Nanny pick your meal 🍱</p>
            <button onClick={()=> navigate("/randomMeal")}> Let Meal Nanny Choose your meal </button>
        </div>   
    )
}

export default Home;