import React from 'react';
import Main from './Main'
import {ThemeContextProvider} from "./themeContext"

function App(props) {

  return (
    <>
      <ThemeContextProvider>
        <Main/>
      </ThemeContextProvider>
    </>
   
  );
}

export default App;
