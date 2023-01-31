import React from "react";

const ThemeContext = React.createContext()

function themeContextProvider(props){
    
    const [color, setColor] = React.useState("light")
    
    const toggleTheme = () => {
        setColor(prevColor => prevColor === "light" ? "dark" : "light")
}
    return(
        <ThemeContext.Provder value={{
            color,
            toggleTheme
        }}>
            {props.children}
        </ThemeContext.Provder>
    )
}


export {themeContextProvider, ThemeContext}