// Envoltura del laboratorio: un mismo input alimenta las dos versiones.
import { useState } from "react";
import "../comparacion.css";
import FiltroConEfecto from "./FiltroConEfecto";
import FiltroDerivado from "./FiltroDerivado";
import { log } from "../../../lab/devlog";

const TAREAS = [
  { id: 1, titulo: "repasar useEffect" },
  { id: 2, titulo: "revisar res.ok" },
  { id: 3, titulo: "adaptar la API" },
  { id: 4, titulo: "practicar useMemo" },
  { id: 5, titulo: "subir la tarea" },
];

function DemoFiltros() {
  const [busqueda, setBusqueda] = useState("");

  const cambiar = (e) => {
    log("state", "busqueda", { valor: e.target.value });
    setBusqueda(e.target.value);
  };

  return (
    <div className="pila">
      <div className="lab-controles">
        <label className="etiqueta" htmlFor="t6-busqueda">
          Buscar (minúsculas):
        </label>
        <input id="t6-busqueda" className="campo" placeholder="Escribe: re" value={busqueda} onChange={cambiar} />
      </div>
      <div className="t6-par">
        <div className="tarjeta t6-lado t6-lado-mal">
          <h3>❌ useEffect + setFiltradas</h3>
          <FiltroConEfecto tareas={TAREAS} busqueda={busqueda} />
        </div>
        <div className="tarjeta t6-lado t6-lado-bien">
          <h3>✅ Calculado en el render</h3>
          <FiltroDerivado tareas={TAREAS} busqueda={busqueda} />
        </div>
      </div>
    </div>
  );
}

export default DemoFiltros;
