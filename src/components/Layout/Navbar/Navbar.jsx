import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "./Navbar.css";
import ThemeContext, { themes } from "../../../context/ThemeContext";

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
      <button onClick={handleChangeTheme} className="button-theme">
        {theme === themes.dark
          ? "cambiar a tema claro"
          : "Cambiar a tema oscuro"}
      </button>
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
