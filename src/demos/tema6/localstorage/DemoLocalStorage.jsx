// Envoltura del laboratorio: simula una recarga remontando Notas y muestra lo guardado.
import { useState } from "react";
import Notas from "./Notas";
import { log } from "../../../lab/devlog";

const CLAVE = "lab-notas";

function DemoLocalStorage() {
  const [montaje, setMontaje] = useState(0);

  const recargar = () => {
    log("event", "Simular recarga: Notas se desmonta y se vuelve a montar");
    setMontaje((prev) => prev + 1);
  };

  const verGuardado = () => {
    log("calculo", `localStorage["${CLAVE}"] (texto)`, localStorage.getItem(CLAVE));
  };

  const borrar = () => {
    localStorage.removeItem(CLAVE);
    log("event", `localStorage.removeItem("${CLAVE}") y recarga`);
    setMontaje((prev) => prev + 1);
  };

  return (
    <div className="pila">
      <div className="lab-controles">
        <div className="fila" role="group" aria-label="Controles de localStorage">
          <button type="button" className="boton boton-chico boton-secundario" onClick={recargar}>
            ↻ Simular recarga
          </button>
          <button type="button" className="boton boton-chico boton-secundario" onClick={verGuardado}>
            Ver lo guardado
          </button>
          <button type="button" className="boton boton-chico boton-peligro" onClick={borrar}>
            Borrar la clave
          </button>
        </div>
        <p className="texto-secundario">
          También puedes recargar la página con F5: el laboratorio vuelve a este paso y las notas siguen ahí.
        </p>
      </div>
      <div className="tarjeta">
        <Notas key={montaje} />
      </div>
    </div>
  );
}

export default DemoLocalStorage;
