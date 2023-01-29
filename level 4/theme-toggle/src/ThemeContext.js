import React from "react";

const ThemeContext = React.createContext();

function ThemeContextProvider(props){
    const [color, setColor] = React.useState("dark")


    const toggleTheme = () => {
        setColor(prevState => prevState === "dark" ? "ligth" : "dark")
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