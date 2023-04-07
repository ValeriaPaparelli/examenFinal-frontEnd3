import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DentistCard.css";
import defaultImage from "../../../assets/dentist_user.png";

const DentistCard = ({ dentist }) => {
  const { name, username, id } = dentist;

  const [addedTofav, setAddedToFav] = useState(false);

  const navigateTo = useNavigate();

  const handleDetailClick = () => {
    navigateTo(`/dentista/${id}`);
  };

  const handleFavsClick = () => {
    let favs;
    const prevFavs = localStorage.getItem("favs");

    if (prevFavs) {
      favs = JSON.parse(prevFavs);
      if (!addedTofav) {
        favs.push(dentist);
      } else {
        favs = favs.filter((fav) => fav.id !== dentist.id);
      }
    } else {
      favs = [dentist];
    }

    localStorage.setItem("favs", JSON.stringify(favs));
    setAddedToFav(!addedTofav);
  };

  useEffect(() => {
    const prevFavs = localStorage.getItem("favs");

    let favs;

    if (prevFavs) {
      favs = JSON.parse(prevFavs);
      if (favs.find((fav) => fav.id === dentist.id)) {
        setAddedToFav(true);
      }
    }
  }, []);

  return (
    <div className="dentist-card">
      <img width="150px" src={defaultImage} alt="" />
      <p className="name">{name}</p>
      <p className="name">{username}</p>
      <div className="buttons">
        <button onClick={handleDetailClick} className="button-detail">
          Ver detalle
        </button>
        <button onClick={handleFavsClick} className="button-favs">
          {addedTofav ? "Quitar de favoritos" : "Agregar a favoritos"}
        </button>
      </div>
    </div>
  );
};

export default DentistCard;
