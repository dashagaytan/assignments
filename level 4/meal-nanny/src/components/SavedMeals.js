import React, {useContext} from "react";
import { MealContext } from "../MealContext";

function SavedMeals(){
    const {savedMeals, deleteMeal} = useContext(MealContext)

    return(
        <div className="savedMeal-container">
            <h1 className="saved-title">Saved Meals:  </h1>
            <ul className="saved-card">
                {savedMeals.map((meal)=> (
                    <li key={meal.idMeal}>
                        <h4>{meal.strMeal}</h4>
                        <img src={meal.strMealThumb} alt=""/>
                        <p>{meal.strInstructions}</p>
                        <button onClick={()=> deleteMeal(meal.idMeal)}>Delete Meal</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SavedMeals;