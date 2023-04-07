import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DentistDetail from "./../../common/DentistDetail/DentistDetail";

const Dentist = () => {
  const [loading, setLoading] = useState(true);
  const [dentist, setDentist] = useState(null);
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const promiseResponse = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    promiseResponse
      .then((response) => setDentist(response.data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <p>cargando...</p>}
      {dentist && <DentistDetail dentist={dentist} />}
      {error && <p>error al cargar la página</p>}
    </div>
  );
};

export default Dentist;
