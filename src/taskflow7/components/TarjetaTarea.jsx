import { memo } from "react";
import { Link } from "react-router";
import { log } from "../../lab/devlog"; // lab

function TarjetaTarea({ id, titulo, estado }) {
  log("render", `TarjetaTarea (memo): ${titulo}`); // lab
  return (
    <div className="tarjeta">
      <Link to={`/tareas/${id}`}>{titulo}</Link>
      <span>{estado}</span>
    </div>
  );
}

export default memo(TarjetaTarea);
