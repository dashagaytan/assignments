import React, {useContext} from "react";
import {MealContext} from "../MealContext";
import {useNavigate} from 'react-router-dom';

function Home(){
    const {searchMeals, query, handleSearchChange} = useContext(MealContext)
    const navigate = useNavigate()

    return(
        <div className="">
            <div className="home-form">
            <h2>Meal Nanny is here to help 🥘</h2>
            <p>What do you want to cook? 🍲</p>
                <form onSubmit={searchMeals}>
                    <input
                    type="text"
                    value={query}
                    placeholder="Type in what you're craving... "
                    onChange={handleSearchChange}
                    />
                    <button>Search Meal Nanny</button>
                </form>
            </div>
                <ul>
                    {searchMeals.map(meal => {
                        return (
                        <li key={meal.idMeal} onClick={()=> navigate(`/recipe/${meal.idMeal}`)}>{meal.strMeal}</li>
                        )
                    })
                    }
                </ul>
            <br>
            </br>

            <p>Can't decide? Let Meal Nanny pick your meal 🍱</p>
            <button onClick={()=> navigate("/randomMeal")}> Let Meal Nanny Choose your meal </button>
        </div>   
    )
}

export default Home;