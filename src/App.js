import "./styles/shared.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <BurgerMenu />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
      </Routes>
    </div>
  );
}

export default App;
