import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "./Navbar.css";
import ThemeContext from "../../../context/ThemeContext";

const Navbar = () => {
  const { handleChangeTheme, theme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        color: theme.fontColor,
        background: theme.backgroundColorSecondary,
      }}
    >
      <h3 className="title-navbar">DH Odonto</h3>
      <button onClick={handleChangeTheme}>Cambiar tema</button>
      <ul>
        <li>
          <NavLink
            to="/"
            className="navLink"
            style={{ color: theme.fontColor }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className="navLink"
            style={{ color: theme.fontColor }}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favoritos"
            className="navLink"
            style={{ color: theme.fontColor }}
          >
            Favoritos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
