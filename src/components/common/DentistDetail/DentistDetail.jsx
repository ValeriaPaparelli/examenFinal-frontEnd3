import "./DentistDetail.css";
import defaultImage from "../../../assets/dentist_user.png";
import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

const DentistDetail = ({ dentist }) => {
  const { theme } = useContext(ThemeContext);
  const { name, email, phone, website } = dentist;

  return (
    <div
      className="detail-container page"
      style={{ color: theme.fontColor, background: theme.backgroundColor }}
    >
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
