import React, {useContext} from "react";
import {MealContext} from "../MealContext";
import {useNavigate} from 'react-router-dom';
import "./component-styles/Home.css"

function Home(){
    const { handleSearch,
            meals,
            searchMeal,
            setSearchMeal} = useContext(MealContext)

    const navigate = useNavigate()

    return(
        <div className="home">
            <h2>Meal Nanny is here to help 🥘</h2>
            <p>What do you want to cook? 🍲</p>
                <form onSubmit={handleSearch}>
                    <input
                    type="text"
                    value={searchMeal}
                    placeholder="Type in what you're craving... "
                    onChange={(e)=> setSearchMeal(e.target.value)}
                    />
                    <button>Search Meal Nanny</button>
                </form>
                <div className="search-grid">
                    {meals ? (
                        <ul>
                        {meals.map((meal) => (
                                <div className="search-card" key={meal.idMeal}>
                                    <ul className="search-list">
                                        <li>
                                            <h3>{meal.strMeal}</h3>
                                            <img src={meal.strMealThumb} alt=""/>
                                            {/* <p>{meal.strInstructions}</p>
                                            <p>{meal.strCategory}</p> */}
                                        </li>
                                    </ul>
                                </div>
                        ))}
                        </ul>
                    )
                :
                (<h2>oops...Meal Nanny doesn't have this meal...Try another 🥘</h2>)}
                </div>
            <br>
            </br>
            <p>Can't decide? Let Meal Nanny pick your meal 🍱</p>
            <button onClick={()=> navigate("/randomMeal")}> Let Meal Nanny Choose your meal </button>
        </div>   
    )
}

export default Home;