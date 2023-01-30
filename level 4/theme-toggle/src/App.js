import React from 'react';
import NavBar from './NavBar'
import Body from './Body'
import Footer from './Footer'
import ThemeContext from "./themeContext"

function App() {
  const context = React.useContext(ThemeContext)

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
