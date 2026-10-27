import TarjetaTarea from "./TarjetaTarea";
import { log } from "../../lab/devlog"; // lab

function ListaTareas({ tareas, onEliminar }) {
  log("render", "ListaTareas", { tareas: tareas.length }); // lab
  if (tareas.length === 0) {
    return <p>No hay tareas todavía.</p>;
  }

  return (
    <div className="tf7-lista">
      {tareas.map((t) => (
        <TarjetaTarea key={t.id} {...t} onEliminar={onEliminar} />
      ))}
    </div>
  );
}

export default ListaTareas;
