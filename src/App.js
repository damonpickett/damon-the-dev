import "./styles/shared.css";
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import ContactModal from "./components/ContactModal/ContactModal";


function App() {

  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div className="App">
      <Header burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <MainContent />
      <BurgerMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
    </div>
  );
}

export default App;
