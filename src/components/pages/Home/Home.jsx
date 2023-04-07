import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import Dentists from "../../common/Dentists/Dentists";
import "./Home.css";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const [loading, setLoading] = useState(true);
  const [dentists, setDentists] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const promiseResponse = axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      promiseResponse
        .then((response) => setDentists(response.data))
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  return (
    <div
      className="page"
      style={{ color: theme.fontColor, background: theme.backgroundColor }}
    >
      {loading && <p className="loading">cargando...</p>}
      {dentists && <Dentists dentists={dentists} showFavButton />}
      {error && <p className="error">Error al cargar la página</p>}
    </div>
  );
};

export default Home;
