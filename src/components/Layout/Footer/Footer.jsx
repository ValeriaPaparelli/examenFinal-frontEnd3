import "./Footer.css";
import ThemeContext from "../../../context/ThemeContext";
import { useContext } from "react";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="footer"
      style={{
        color: theme.fontColor,
        background: theme.backgroundColorTertiary,
      }}
    >
      <h3 className="title-footer">DIGITAL HOUSE</h3>
    </div>
  );
};

export default Footer;
