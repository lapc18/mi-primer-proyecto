import useFetch from "../../../hooks/useFetch";
import { log } from "../../../lab/devlog"; // lab

const URL = "https://jsonplaceholder.typicode.com/todos?_limit=4";

function ListaTareas() {
  const { datos, cargando, error } = useFetch(URL);
  log("render", "ListaTareas", { cargando, error }); // lab

  if (cargando) return <p className="alerta alerta-advertencia">Cargando tareas...</p>;
  if (error) return <p className="alerta alerta-error">Error: {error}</p>;

  return (
    <ul className="lista">
      {datos.map((t) => (
        <li key={t.id} className="lista-item">
          {t.title}
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;
