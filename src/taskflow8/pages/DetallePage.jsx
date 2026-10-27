import { Link, useParams } from "react-router";
import useTareas from "../../hooks/useTareas";
import { log } from "../../lab/devlog"; // lab

function DetallePage() {
  const { id } = useParams();
  const { tareas, completar } = useTareas();
  const tarea = tareas.find((t) => t.id === Number(id));
  log("render", "DetallePage: useParams() + useTareas()", { id, estado: tarea?.estado }); // lab

  if (!tarea) return <p>La tarea #{id} no existe.</p>;

  return (
    <article className="detalle">
      <h1>{tarea.titulo}</h1>
      <p>Estado: {tarea.estado}</p>
      {tarea.estado === "Pendiente" && (
        <button onClick={() => completar(tarea.id)}>Marcar como completada</button>
      )}
      <Link to="/tareas">← Volver a tareas</Link>
    </article>
  );
}

export default DetallePage;
