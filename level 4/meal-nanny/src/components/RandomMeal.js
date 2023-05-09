import React, {useState, useEffect} from "react";
import axios from "axios";

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
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt="meal" style={{width: "200px", height: "200px"}}/>
                    <p>{meal.strCategory}</p>
                </div>
                    <button onClick={getRandomMeal}>Meal Nanny show next meal</button>
               </div> 
            ))}
        </div>
    )
}

export default RandomMeal;