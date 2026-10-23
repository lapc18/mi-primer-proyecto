import { useState } from "react";
import { log } from "../../../lab/devlog"; // lab

function PanelInfo() {
  const [visible, setVisible] = useState(false);
  log("render", "PanelInfo", { visible }); // lab

  const alternar = () => {
    setVisible((prev) => !prev);
    log("state", "setVisible((prev) => !prev)", { de: visible, a: !visible }); // lab
  };

  return (
    <div className="pila">
      <div>
        <button className="boton boton-primario" onClick={alternar}>
          {visible ? "Ocultar" : "Mostrar"} información
        </button>
      </div>
      {visible && (
        <p className="alerta alerta-info">
          React solo dibuja este párrafo cuando visible es true.
        </p>
      )}
    </div>
  );
}

export default PanelInfo;
