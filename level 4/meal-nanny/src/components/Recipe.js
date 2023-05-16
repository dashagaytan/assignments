import axios from "axios";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

function Recipe(){

    const {idMeal}  = useParams()
    const [recipe, setRecipe] = useState(" ")

    useEffect(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => setRecipe(res.data.meals[0]))
        .catch(err => console.log(err))
    }, [])


    if(!recipe) {
        return <div>Loading...</div>
    }

    return(
        <>
            <h1>Recipe</h1>
            <div className="savedMeal-container">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt="meal" />
            <div>
                <h3 className="ingredients-title"> This is a {recipe.strCategory} dish 🥘</h3>
                <h4> to make it you'll need: </h4>
                    <p className="random-ingredients">{recipe.strMeasure1} | {recipe.strIngredient1}</p>
                    <p className="random-ingredients">{recipe.strMeasure2} | {recipe.strIngredient2}</p>
                    <p className="random-ingredients">{recipe.strMeasure3} | {recipe.strIngredient3}</p>
                    <p className="random-ingredients">{recipe.strMeasure4} | {recipe.strIngredient4}</p>
                    <p className="random-ingredients">{recipe.strMeasure5} | {recipe.strIngredient5}</p>
                    <p className="random-ingredients">{recipe.strMeasure6} | {recipe.strIngredient6}</p>
                    <p className="random-ingredients">{recipe.strMeasure7} | {recipe.strIngredient7}</p>
                    <p className="random-ingredients">{recipe.strMeasure8} | {recipe.strIngredient8}</p>
              </div>
              <div>
                {recipe.strInstructions}
              </div>
            </div>
           
        </>
    )
}

export default Recipe;