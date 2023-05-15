import React, {useContext, useState} from "react";
import { MealContext } from "../MealContext";

function SavedMeals(){
    const {savedMeals} = useContext(MealContext)

const [deleteMeal, setDeleteMeal] = useState("")

const deleteRecipe =()=>{
    setDeleteMeal(deleteMeal)
}

    return(
        <div>
            <h1>Saved Meals:  </h1>
            <ul>
                {savedMeals.map((meal)=> (
                    <li key={meal.idMeal}>
                        <h4>{meal.strMeal}</h4>
                        <img src={meal.strMealThumb} alt=""/>
                        <p>{meal.strInstructions}</p>
                    </li>
                ))}
            </ul>
            <button onClick={deleteRecipe}>Delete Meal</button>
        </div>
    )
}

export default SavedMeals;