import './BurgerMenu.css';
import { NavLink, useLocation } from "react-router-dom";

const BurgerMenu = (props) => {
  let visibility = "hide";

  if (props.burgerMenu) {
    visibility = "show";
  }

  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div id="burger-canvas" className={visibility}>
        <ul className="burger-menu">
          <li className={currentPage === "/home" ? "active" : ""}>
            <NavLink className="burger-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className={currentPage === "/experience" ? "active" : ""}>
            <NavLink className="burger-link" to="/experience">
              Experience
            </NavLink>
          </li>
          <li className={currentPage === "/projects" ? "active" : ""}>
            <NavLink className="burger-link" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className={currentPage === "/about" ? "active" : ""}>
            <NavLink className="burger-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
    </div>
  );
};

export default BurgerMenu;
