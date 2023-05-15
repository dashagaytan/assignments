import React, {useContext} from "react";
import { MealContext } from "../MealContext";

function SavedMeals(props){
    const {savedMeals,deleteMeal} = useContext(MealContext)


    return(
        <div>
            <h1>Saved Meals:  </h1>
            <ul>
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