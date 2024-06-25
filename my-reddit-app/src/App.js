import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";

const App = () => {


//setting the input value to the searchItem's state which updates
//whenever the user types in the input thanks to the onChange event handler
  return (
    <div className="app">
      <header>
        <div className="search-bar-container">
        <NavBar/>
        </div>
      </header>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
