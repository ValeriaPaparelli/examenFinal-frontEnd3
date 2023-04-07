import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <h3 className="title-navbar">DH Odonto</h3>
      <ul>
        <li>
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className="navLink">
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink to="/favoritos" className="navLink">
            Favoritos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
