import TarjetaTarea from "./TarjetaTarea";

function ListaTareas({ tareas }) {
  if (tareas.length === 0) {
    return <p className="texto-secundario">No hay tareas que mostrar.</p>;
  }

  return (
    <ul className="lista">
      {tareas.map((t) => (
        <TarjetaTarea key={t.id} tarea={t} />
      ))}
    </ul>
  );
}

export default ListaTareas;
