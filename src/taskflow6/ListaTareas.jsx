import TarjetaTarea from "./TarjetaTarea";
import { log } from "../lab/devlog"; // lab

function ListaTareas({ tareas, onEliminar }) {
  log("render", "ListaTareas", { visibles: tareas.length }); // lab
  if (tareas.length === 0) {
    return <p className="texto-secundario">Ninguna tarea coincide con la búsqueda.</p>;
  }

  return (
    <ul className="lista">
      {tareas.map((t) => (
        <TarjetaTarea key={t.id} {...t} onEliminar={onEliminar} />
      ))}
    </ul>
  );
}

export default ListaTareas;
