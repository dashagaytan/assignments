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
                                    <h3 className="ingredients-title">To make this, you will need: </h3>
                                    <p className="random-ingredients">{meal.strMeasure1} | {meal.strIngredient1}</p>
                                    <p className="random-ingredients">{meal.strMeasure2} | {meal.strIngredient2}</p>
                                    <p className="random-ingredients">{meal.strMeasure3} | {meal.strIngredient3}</p>
                                    <p className="random-ingredients">{meal.strMeasure4} | {meal.strIngredient4}</p>
                                    <p className="random-ingredients">{meal.strMeasure5} | {meal.strIngredient5}</p>
                                    <p className="random-ingredients">{meal.strMeasure6} | {meal.strIngredient6}</p>
                                    <p className="random-ingredients">{meal.strMeasure7} | {meal.strIngredient7}</p>
                                    <p className="random-ingredients">{meal.strMeasure8} | {meal.strIngredient8}</p>
                                </div>
                            </div>
                    </div>
               </div> 
            ))}
        </div>
    )
}
export default RandomMeal;