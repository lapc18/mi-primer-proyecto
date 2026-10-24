// Envoltura del laboratorio: TaskFlow 6 con red simulada y un botón para empezar de cero.
import { useState } from "react";
import App from "../../../taskflow6/App";
import ControlesFetch from "../../../lab/ControlesFetch";
import useSimulacion from "../../../lab/useSimulacion";
import { log } from "../../../lab/devlog";

function DemoTaskFlow6() {
  const { modo, ejecucion, cambiar } = useSimulacion();
  const [borrados, setBorrados] = useState(0);

  const empezarDeCero = () => {
    localStorage.removeItem("tf-tareas");
    log("event", 'localStorage.removeItem("tf-tareas"): TaskFlow vuelve a la primera visita');
    setBorrados((prev) => prev + 1);
  };

  return (
    <div className="pila">
      <ControlesFetch modos={["exito", "demora", "error404", "sinRed"]} modo={modo} onCambiar={cambiar} />
      <div className="lab-controles">
        <div className="fila">
          <button type="button" className="boton boton-chico boton-peligro" onClick={empezarDeCero}>
            Borrar tareas guardadas
          </button>
          <span className="texto-secundario">Simula la primera visita a TaskFlow.</span>
        </div>
      </div>
      <App key={`${ejecucion}-${borrados}`} />
    </div>
  );
}

export default DemoTaskFlow6;
