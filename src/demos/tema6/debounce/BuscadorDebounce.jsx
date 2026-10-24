import { useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { log } from "../../../lab/devlog"; // lab

function BuscadorDebounce({ delay = 400 }) {
  const [busqueda, setBusqueda] = useState("");
  const busquedaDebounced = useDebounce(busqueda, delay);
  log("render", "BuscadorDebounce", { busqueda, busquedaDebounced }); // lab

  return (
    <div className="pila">
      <input
        className="campo"
        placeholder="Escribe rápido..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <p>
        Escribiendo: <strong className="t6-valor">{busqueda}</strong>
      </p>
      <p>
        Debounced: <strong className="t6-valor">{busquedaDebounced}</strong>
      </p>
    </div>
  );
}

export default BuscadorDebounce;
