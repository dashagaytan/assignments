import React, {useContext} from "react";
import {MealContext} from "./MealContext";
import {useNavigate} from 'react-router-dom';

function Home(){
    const navigate = useNavigate()
    return(
        <div className="">
            <div className="home-form">
            <h2>Meal Nanny is here to help 🥘</h2>
            <p>What do you want to cook? 🍲</p>
                <form>
                    <input
                    placeholder="Type in what you're craving "
                    // onChange={handleSearchChange}
                    />
                    <button>Search Meal Nanny</button>
                </form>
            </div>
            <br>
            </br>
            <p>Can't decide? Let Meal Nanny pick your meal 🍱</p>
            <button onClick={()=> navigate("/randomMeal")}> Let Meal Nanny Choose your meal </button>
        </div>   
    )
}

export default Home;