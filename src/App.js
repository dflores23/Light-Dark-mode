import './App.css';
import React, { createContext, useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Overview from './components/Overview';
import ReactSwitch from "react-switch"

export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = ()=> {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
    <Header />
    <label className='toggle'>
    <span className='toggleTheme'>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
    <ReactSwitch  onChange ={toggleTheme} checked={theme === "dark"} />
    </label>
    <Cards />
    <Overview />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
