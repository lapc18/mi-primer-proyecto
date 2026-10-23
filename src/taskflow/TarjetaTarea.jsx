import "./TaskFlow.css";

function TarjetaTarea({ tarea }) {
  const clase = tarea.estado === "Completada" ? "badge badge-exito" : "badge badge-pendiente";

  return (
    <li className="tarjeta taskflow-tarea">
      <span>{tarea.titulo}</span>
      <span className={clase}>{tarea.estado}</span>
    </li>
  );
}

export default TarjetaTarea;
