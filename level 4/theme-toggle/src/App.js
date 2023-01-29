import React from 'react';
import NavBar from './NavBar'
import Body from './Body'
import Footer from './Footer'
import {ThemeContextProvider} from "./themeContext"

function App() {

  return (
    <>
      <ThemeContextProvider>
        <NavBar />
        <Body/>
        <Footer />
      </ThemeContextProvider>
    </>
   
  );
}

export default App;
