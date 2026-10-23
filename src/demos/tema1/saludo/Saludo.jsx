import "./Saludo.css";
import logo from "../../../assets/react.svg";
import { log } from "../../../lab/devlog"; // lab

function Saludo({ nombre }) {
  log("render", "Saludo", { nombre }); // lab
  return (
    <>
      <h1 className="titulo">Hola, {nombre}</h1>
      <p>2 + 3 = {2 + 3}</p>
      <img src={logo} alt="Logo de React" className="saludo-logo" />
    </>
  );
}

export default Saludo;
