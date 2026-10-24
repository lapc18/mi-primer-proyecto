// Envoltura del laboratorio: un input y un botón que re-renderiza sin cambiar la búsqueda.
import { useState } from "react";
import "../comparacion.css";
import TAREAS from "./tareasGrandes";
import FiltroSinMemo from "./FiltroSinMemo";
import FiltroConMemo from "./FiltroConMemo";
import { log } from "../../../lab/devlog";

function DemoUseMemo() {
  const [busqueda, setBusqueda] = useState("");
  const [contador, setContador] = useState(0);
  const texto = busqueda.toLowerCase();

  const renderizar = () => {
    log("state", "contador + 1 (no toca la búsqueda)");
    setContador((prev) => prev + 1);
  };

  return (
    <div className="pila">
      <div className="lab-controles">
        <label className="etiqueta" htmlFor="t6-memo-busqueda">
          Buscar entre {TAREAS.length} tareas:
        </label>
        <div className="fila">
          <input
            id="t6-memo-busqueda"
            className="campo"
            placeholder="Escribe: usememo"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button type="button" className="boton boton-secundario" onClick={renderizar}>
            Re-render sin cambios ({contador})
          </button>
        </div>
      </div>
      <div className="t6-par">
        <div className="tarjeta t6-lado t6-lado-mal">
          <h3>❌ Sin useMemo</h3>
          <FiltroSinMemo tareas={TAREAS} busqueda={texto} />
        </div>
        <div className="tarjeta t6-lado t6-lado-bien">
          <h3>✅ Con useMemo</h3>
          <FiltroConMemo tareas={TAREAS} busqueda={texto} />
        </div>
      </div>
    </div>
  );
}

export default DemoUseMemo;
