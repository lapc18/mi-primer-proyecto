import { useState } from "react";
import leerNotas from "./leerNotas";
import { log } from "../../../lab/devlog"; // lab

function LecturaPerezosa() {
  const [notas] = useState(() => leerNotas());
  const [clics, setClics] = useState(0);
  log("render", "✅ LecturaPerezosa", { clics }); // lab

  return (
    <div className="pila">
      <p>{notas.length} notas guardadas</p>
      <button className="boton boton-secundario" onClick={() => setClics((prev) => prev + 1)}>
        Re-render ({clics})
      </button>
    </div>
  );
}

export default LecturaPerezosa;
