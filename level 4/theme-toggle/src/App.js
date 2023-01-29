import React from 'react';
import Body from './Body'
import NavBar from './NavBar'
import Footer from './Footer'
import {ThemeContextProvider} from "./themeContext"

function App(props) {

  return (
    <>
      <ThemeContextProvider>
        <Body/>
        <NavBar />
        <Footer />
      </ThemeContextProvider>
    </>
   
  );
}

export default App;
