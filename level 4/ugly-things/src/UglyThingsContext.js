import React, {useState} from "react";

const UglyThemeContext = React.createContext()

function themeContextProvider(props){
    
    const [color, setColor] = useState("light")
    
    const toggleTheme = () => {
        setColor(prevColor => prevColor === "light" ? "dark" : "light")
}
    return(
        <UglyThemeContext.Provider value={{
            color,
            toggleTheme
        }}>
            {props.children}
        </UglyThemeContext.Provider>
    )
}


export {themeContextProvider, UglyThemeContext}