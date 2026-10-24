// Envoltura del laboratorio: elegir el delay del debounce.
import { useState } from "react";
import "../comparacion.css";
import BuscadorDebounce from "./BuscadorDebounce";
import { log } from "../../../lab/devlog";

const DELAYS = [200, 400, 800];

function DemoDebounce() {
  const [delay, setDelay] = useState(400);

  const elegir = (ms) => {
    log("state", `delay = ${ms} ms`);
    setDelay(ms);
  };

  return (
    <div className="pila">
      <div className="lab-controles">
        <div className="fila" role="group" aria-label="Delay">
          <span className="etiqueta">Delay:</span>
          {DELAYS.map((ms) => (
            <button
              key={ms}
              type="button"
              className={ms === delay ? "boton boton-chico boton-primario" : "boton boton-chico boton-secundario"}
              aria-pressed={ms === delay}
              onClick={() => elegir(ms)}
            >
              {ms} ms
            </button>
          ))}
        </div>
      </div>
      <div className="tarjeta">
        <BuscadorDebounce delay={delay} />
      </div>
    </div>
  );
}

export default DemoDebounce;
