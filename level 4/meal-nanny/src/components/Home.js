import React from "react";

function Home(){
    function searchMealNanny(){
        console.log("searching meal nanny");
    }
    return(
        <div className="home-container">
            {/* <img src="images/homepageimg.png" alt="homeimg"/> */}
            <p>Meal Nanny is a meal planning app that allows you to add meals to your meal planner.</p>

            <input 
            placeholder="Seach Meal Nanny"
            className="searchBox"/>
            
            <button onClick={searchMealNanny} className="searchButton">Search</button>
        </div>
    )
}

export default Home;