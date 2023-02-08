import React from "react";
import {themeContextProvider} from "./themeContext"
import NavBar from './components/NavBar'
import Form from './components/Form'
import UglyList from './components/UglyList'
import UglyThings from './components/UglyThings'

function App() {
  return (
    <div className="App">
      <themeContextProvider>
        <NavBar />
        <Form />
        <UglyList />
       <UglyThings />
      </themeContextProvider>
    </div>
  );
}

export default App;
