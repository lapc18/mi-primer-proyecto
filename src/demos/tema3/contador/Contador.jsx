import { useState } from "react";
import "./Contador.css";
import { log } from "../../../lab/devlog"; // lab

function Contador() {
  const [cuenta, setCuenta] = useState(0);
  log("render", "Contador", { cuenta }); // lab

  const sumar = () => {
    setCuenta((prev) => prev + 1);
    log("state", "setCuenta((prev) => prev + 1)", { de: cuenta, a: cuenta + 1 }); // lab
  };

  const restar = () => {
    setCuenta((prev) => prev - 1);
    log("state", "setCuenta((prev) => prev - 1)", { de: cuenta, a: cuenta - 1 }); // lab
  };

  const reiniciar = () => {
    setCuenta(0);
    log("state", "setCuenta(0)", { de: cuenta, a: 0 }); // lab
  };

  return (
    <div className="contador">
      <p className="contador-valor">{cuenta}</p>
      <div className="fila">
        <button className="boton boton-secundario" onClick={restar}>
          −
        </button>
        <button className="boton boton-primario" onClick={sumar}>
          +
        </button>
        <button className="boton" onClick={reiniciar}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Contador;
