import React, {useState, useEffect} from "react";
import axios from "axios";
import "./component-styles/RandomMeal.css"

function RandomMeal(){

    const [randomMeal, setRandomMeal] = useState([])

    const getRandomMeal =()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => setRandomMeal(res.data.meals))
        .catch(err => console.log(err))
    }
    useEffect(()=> {
        console.log("useEffect ran")
        getRandomMeal();
    },[])


    return(
        <div className="randomMeal-container">
            {randomMeal.map(meal =>(
               <div key={meal.idMeal} >
                    <div className="random-meal">
                        <h2 className="randomMeal-name">{meal.strMeal}</h2>
                        <img className="randomMeal-img" src={meal.strMealThumb} alt="meal" style={{ width: "500px", height: "auto", borderRadius: "10px" }}/>
                        <p className="randomMeal-category">{meal.strCategory}</p>
                        <button className="randomMeal-btn" onClick={getRandomMeal}>Get another Meal 🥘</button>
                            <div className="details-container">
                                <div>
                                    <h3 className="ingredients-title">Ingredients Needed:</h3>
                                    <p className="random-ingredients">{meal.strIngredient1} | {meal.strMeasure1}</p>
                                    <p className="random-ingredients">{meal.strIngredient2} | {meal.strMeasure2}</p>
                                    <p className="random-ingredients">{meal.strIngredient3} | {meal.strMeasure3}</p>
                                    <p className="random-ingredients">{meal.strIngredient4} | {meal.strMeasure4}</p>
                                    <p className="random-ingredients">{meal.strIngredient5} | {meal.strMeasure5}</p>
                                    <p className="random-ingredients">{meal.strIngredient6} | {meal.strMeasure6}</p>
                                    <p className="random-ingredients">{meal.strIngredient5} | {meal.strMeasure7}</p>
                                    <p className="random-ingredients">{meal.strIngredient6} | {meal.strMeasure8}</p>
                                </div>
                            </div>
                    </div>
               </div> 
            ))}
        </div>
    )
}

export default RandomMeal;