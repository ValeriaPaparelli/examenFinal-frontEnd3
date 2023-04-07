import React from "react";
import DentistCard from "../DentistCard/DentistCard";
import "./Dentists.css";

const Dentists = ({ dentists }) => {
  return (
    <div className="dentists-container">
      {dentists.length === 0 ? (
        <p>No hay dentistas</p>
      ) : (
        dentists.map((dentist) => (
          <DentistCard dentist={dentist} key={dentist.id} />
        ))
      )}
    </div>
  );
};

export default Dentists;
