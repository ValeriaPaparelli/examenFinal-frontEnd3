import React, { useContext, useState } from "react";
import ThemeContext from "../../../context/ThemeContext";
import "./Contact.css";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.name.trim().length < 5 || !data.email.match(emailRegex)) {
      setErrorMessage("Por favor verifique su información nuevamente");
      return;
    } else {
      console.log(data);
      setErrorMessage(null);
      setTimeout(() => {
        alert(`Gracias ${data.name}, te contactaremos cuanto antes vía mail`);
      }, 500);
    }
  };

  return (
    <div
      className="page"
      style={{ color: theme.fontColor, background: theme.backgroundColor }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Ingrese su email"
          onChange={handleChange}
        />
        <button className="button-form" type="submit">
          Ingresar
        </button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
