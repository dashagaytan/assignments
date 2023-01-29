import React from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props){
    const [color, setColor] = React.useState("dark")


    function toggleTheme(event){
        setColor(event.target.value)
        console.log(event.target.value)
    }

    return(
        <ThemeContext.Provider value={{
            color: color,
            toggleTheme: toggleTheme
        }}>
            {props.childern}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider};