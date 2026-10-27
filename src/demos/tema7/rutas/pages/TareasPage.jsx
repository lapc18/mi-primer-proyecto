import { Link } from "react-router";
import { log } from "../../../../lab/devlog"; // lab

function TareasPage() {
  log("render", 'Routes eligió path="/tareas" → TareasPage'); // lab
  return (
    <section className="t7-pagina">
      <h2>Tareas</h2>
      <div className="t7-enlaces">
        <Link to="/tareas/1">Tarea 1</Link>
        <Link to="/tareas/42">Tarea 42</Link>
        <Link to="/tareas/nueva">+ Nueva tarea</Link>
      </div>
    </section>
  );
}

export default TareasPage;
