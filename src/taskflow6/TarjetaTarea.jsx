import { memo } from "react";
import "../taskflow/TaskFlow.css";
import { log } from "../lab/devlog"; // lab

function TarjetaTarea({ id, titulo, estado, onEliminar }) {
  console.log("render:", titulo);
  log("render", `TarjetaTarea (memo): ${titulo}`); // lab
  const clase = estado === "Completada" ? "badge badge-exito" : "badge badge-pendiente";

  return (
    <li className="tarjeta taskflow-tarea">
      <span>{titulo}</span>
      <span className="fila">
        <span className={clase}>{estado}</span>
        <button
          className="boton boton-chico boton-peligro"
          onClick={() => onEliminar(id)}
          aria-label={`Eliminar ${titulo}`}
        >
          X
        </button>
      </span>
    </li>
  );
}

export default memo(TarjetaTarea);
