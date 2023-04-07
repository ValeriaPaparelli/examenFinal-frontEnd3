import axios from "axios";
import React, { useEffect, useState } from "react";
import Dentists from "../../common/Dentists/Dentists";
import "./Home.css";

const Home = () => {
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
    <div>
      {loading && <p className="loading">cargando...</p>}
      {dentists && <Dentists dentists={dentists} />}
      {error && <p className="error">Error al cargar la página</p>}
    </div>
  );
};

export default Home;
