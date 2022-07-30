import Retangle from "../../assets/Rectangle.png";
import Elipse from "../../assets/Ellipse.png";
import grupo1 from "../../assets/Group1.png";
import grupo2 from "../../assets/Group2.png";
import NuKenzie from "../../assets/NuKenzie1.png";
import "./styles.css";
const TemplateInicial = ({ screenChange }) => {
  return (
    <section className="templateInical">
      <div className="container">
        <img src={NuKenzie} alt="Nu Kenzie" className="kenzie" />
        <img src={Elipse} alt="" className="elipse1" />
        <img src={Elipse} alt="" className="elipse2" />
        <img src={Elipse} alt="" className="elipse3" />
        <img src={Retangle} alt="" className="retangle" />
        <img src={grupo1} alt="" className="grupo1" />
        <img src={grupo2} alt="" className="grupo2" />
      </div>

      <div className="containerText">
        <h2>Centralize o controle das suas finanças</h2>
        <p>de forma rápida e segura</p>
        <button onClick={() => screenChange()}>Iniciar</button>
      </div>
    </section>
  );
};
export default TemplateInicial;
