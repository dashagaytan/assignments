import React from "react";
import NavBar from './components/NavBar'
import Form from './components/Form'
import UglyList from "./components/UglyList";
import Footer from './components/Footer'
import { UglyProvider } from "./components/UglyContext";


function App() {
  return (
    <div className="App">
      <UglyProvider>
        <NavBar />
        <Form />
        <UglyList />
        <Footer />
      </UglyProvider>
    </div>
  );
}

export default App;
