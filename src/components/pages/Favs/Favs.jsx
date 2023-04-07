import { useContext, useEffect, useState } from "react";
import Dentists from "./../../common/Dentists/Dentists";
import ThemeContext from "../../../context/ThemeContext";

const Favs = () => {
  const { theme } = useContext(ThemeContext);
  const [favs, setFavs] = useState(null);

  useEffect(() => {
    const dentistsFavs = localStorage.getItem("favs");
    console.log(dentistsFavs);
    console.log(JSON.parse(dentistsFavs));
    if (dentistsFavs) {
      setFavs(JSON.parse(dentistsFavs));
    } else {
      setFavs([]);
    }
  }, []);

  return (
    <div
      className="page"
      style={{ color: theme.fontColor, background: theme.backgroundColor }}
    >
      {favs && <Dentists dentists={favs} showFavButton={false} />}
    </div>
  );
};

export default Favs;
