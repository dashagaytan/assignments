import React from "react";

const ThemeContext = React.createContext()

function ThemeContextProvider(props){
    //create state to change theme from light to dark 
    const [theme, setTheme] = React.useState("light")

    //function that toggles the button from light theme to dark
    const toggleTheme = () => {
        setTheme(prevState => prevState === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
          }}>
            {props.children}
          </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider};