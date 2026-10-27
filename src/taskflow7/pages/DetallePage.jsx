import { Link, useNavigate, useParams } from "react-router";
import { log } from "../../lab/devlog"; // lab

function DetallePage({ tareas, setTareas }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const tarea = tareas.find((t) => t.id === Number(id));
  log("render", "DetallePage", { id, encontrada: tarea !== undefined }); // lab

  const eliminar = () => {
    log("state", `eliminar tarea ${tarea.id} y navigate("/tareas")`); // lab
    setTareas((prev) => prev.filter((t) => t.id !== tarea.id));
    navigate("/tareas");
  };

  if (!tarea) return <p>La tarea #{id} no existe.</p>;

  return (
    <article className="detalle">
      <h1>{tarea.titulo}</h1>
      <p>Estado: {tarea.estado}</p>
      <button onClick={eliminar}>Eliminar</button>
      <Link to="/tareas">← Volver a tareas</Link>
    </article>
  );
}

export default DetallePage;
