import React from 'react';
import NavBar from './NavBar'
import Body from './Body'
import Footer from './Footer'
import ThemeContext from "./themeContext"

function App(props) {
  const context = React.useContext(ThemeContext)

  //create state to toggle from light to dark mode
  const [theme, setTheme]=React.useState("light")

  //toggle function that we will add to our button
  const toggleTheme =() =>{
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <div className={`${context}-theme`}>
      <ThemeContext.Provider value="light">
        <NavBar />
        <Body/>
        <Footer />
      </ThemeContext.Provider>
    </div>
   
  );
}

export default App;
