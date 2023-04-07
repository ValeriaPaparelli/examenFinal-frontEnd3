import React from "react";
import "./DentistDetail.css";
import defaultImage from "../../../assets/dentist_user.png";

const DentistDetail = ({ dentist }) => {
  const { name, email, phone, website } = dentist;

  return (
    <div className="detail-container">
      <img src={defaultImage} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
      </div>
    </div>
  );
};

export default DentistDetail;
