import { useState } from "react";
import Reloj from "./Reloj";
import { log } from "../../../lab/devlog"; // lab

function App() {
  const [visible, setVisible] = useState(true);

  const alternar = () => {
    log("event", visible ? "Desmontar Reloj" : "Montar Reloj"); // lab
    setVisible((prev) => !prev);
  };

  return (
    <div className="pila">
      <div>
        <button className="boton boton-primario" onClick={alternar}>
          {visible ? "Desmontar" : "Montar"} reloj
        </button>
      </div>
      {visible && <Reloj />}
    </div>
  );
}

export default App;
