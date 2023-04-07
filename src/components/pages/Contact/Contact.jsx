import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import "./Contact.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="page"
      style={{ color: theme.fontColor, background: theme.backgroundColor }}
    >
      <form>
        <input type="text" name="name" placeholder="Ingrese su nombre" />
        <input type="text" name="email" placeholder="Ingrese su email" />
        <button className="button-form">Ingresar</button>
      </form>
    </div>
  );
};

export default Contact;
