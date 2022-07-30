import NuKenzie from "../../assets/NuKenzie.png";
import "./styles.css";
const Header = ({ screenChange }) => {
  return (
    <header>
      <img src={NuKenzie} alt="NuKenzie" onClick={() => screenChange()} />
      <button onClick={() => screenChange()}>Inicio</button>
    </header>
  );
};
export default Header;
