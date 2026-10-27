import useTareas from "../../hooks/useTareas";
import ListaTareas from "../components/ListaTareas";
import { log } from "../../lab/devlog"; // lab

function TareasPage() {
  const { tareas, eliminar } = useTareas();
  log("render", "TareasPage: useTareas(), sin props", { tareas: tareas.length }); // lab
  return (
    <section>
      <h2>Mis tareas ({tareas.length})</h2>
      <ListaTareas tareas={tareas} onEliminar={eliminar} />
    </section>
  );
}

export default TareasPage;
