// Envoltura del laboratorio: monta una versión a la vez para que el log se lea claro.
import { useState } from "react";
import "../comparacion.css";
import LoopInfinito from "./LoopInfinito";
import CargaUnaVez from "./CargaUnaVez";
import { limpiar, log } from "../../../lab/devlog";

function claseBoton(activo) {
  return activo ? "boton boton-chico boton-primario" : "boton boton-chico boton-secundario";
}

function DemoLoop() {
  const [version, setVersion] = useState("mal");

  const elegir = (nueva) => {
    limpiar();
    log("event", nueva === "mal" ? "Montar versión sin array" : "Montar versión con []");
    setVersion(nueva);
  };

  return (
    <div className="pila">
      <div className="lab-controles">
        <div className="fila" role="group" aria-label="Versión">
          <span className="etiqueta">Versión:</span>
          <button type="button" className={claseBoton(version === "mal")} aria-pressed={version === "mal"} onClick={() => elegir("mal")}>
            ❌ Sin array
          </button>
          <button type="button" className={claseBoton(version === "bien")} aria-pressed={version === "bien"} onClick={() => elegir("bien")}>
            ✅ Con []
          </button>
        </div>
        <p className="texto-secundario">
          La versión sin array hace fetch una y otra vez. El laboratorio la frena a las 6 vueltas para no saturar la API.
        </p>
      </div>
      {version === "mal" ? (
        <div className="tarjeta t6-lado t6-lado-mal">
          <h3>❌ useEffect(fn)</h3>
          <LoopInfinito />
        </div>
      ) : (
        <div className="tarjeta t6-lado t6-lado-bien">
          <h3>✅ useEffect(fn, [])</h3>
          <CargaUnaVez />
        </div>
      )}
    </div>
  );
}

export default DemoLoop;
