import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Item from "./Item";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"
  
  const [isDarkMode, setIsDarkMode]= useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(isDarkMode);
  };

function toggleMode() {
  setIsDarkMode((prevMode) => !prevMode);
};
  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}> Dark Mode</button>
      </header>
      <button>{toggleMode}</button>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
