// Envoltura del laboratorio: el padre tiene un contador que no tiene nada que ver con las tarjetas.
// eliminar ya es estable (useCallback): el porqué se ve en el paso 6.10.
import { useCallback, useState } from "react";
import "../comparacion.css";
import TAREAS from "./tareasMemo";
import TarjetaTarea from "./TarjetaTarea";
import TarjetaSinMemo from "./TarjetaSinMemo";
import { log } from "../../../lab/devlog";

function DemoMemo() {
  const [tareas, setTareas] = useState(TAREAS);
  const [contador, setContador] = useState(0);

  const eliminar = useCallback((id) => {
    log("event", `eliminar(${id})`);
    setTareas((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const sumar = () => {
    log("state", "contador del padre + 1");
    setContador((prev) => prev + 1);
  };

  return (
    <div className="pila">
      <div className="lab-controles">
        <div className="fila">
          <button type="button" className="boton boton-secundario" onClick={sumar}>
            Contador del padre: {contador}
          </button>
          <span className="texto-secundario">Cambia el state del padre, no las tareas.</span>
        </div>
      </div>
      <div className="t6-par">
        <div className="tarjeta t6-lado t6-lado-mal">
          <h3>❌ Sin memo</h3>
          {tareas.map((t) => (
            <TarjetaSinMemo key={t.id} {...t} onEliminar={eliminar} />
          ))}
        </div>
        <div className="tarjeta t6-lado t6-lado-bien">
          <h3>✅ Con memo</h3>
          {tareas.map((t) => (
            <TarjetaTarea key={t.id} {...t} onEliminar={eliminar} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DemoMemo;
