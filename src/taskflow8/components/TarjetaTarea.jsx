import { memo } from "react";
import { Link } from "react-router";
import { log } from "../../lab/devlog"; // lab

function TarjetaTarea({ id, titulo, estado, onEliminar }) {
  log("render", `TarjetaTarea (memo): ${titulo}`, { estado }); // lab
  return (
    <div className="tarjeta">
      <Link to={`/tareas/${id}`}>{titulo}</Link>
      <span>{estado}</span>
      <button onClick={() => onEliminar(id)}>Eliminar</button>
    </div>
  );
}

export default memo(TarjetaTarea);
