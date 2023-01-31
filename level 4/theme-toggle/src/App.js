import React from 'react';
import NavBar from './NavBar'
import Body from './Body'
import Footer from './Footer'
import ThemeContext from "./themeContext"

function App(props) {
  const context = React.useContext(ThemeContext)
//create state to change theme from light to dark 
const [theme, setTheme] = React.useState("light")

//function that toggles the button from light theme to dark
const toggleTheme = () => {
  setTheme(setTheme => setTheme === "light" ? "dark" : "lihgt")
}

  return (
    <div className={`${context.theme}-theme`}>
      <ThemeContext.Provider value={{
        theme,
        toggleTheme
      }}>
        <NavBar />
        <Body/>
        <Footer />
      </ThemeContext.Provider>
    </div>
   
  );
}

export default App;
