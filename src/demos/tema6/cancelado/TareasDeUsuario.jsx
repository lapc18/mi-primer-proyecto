import useFetch from "../../../hooks/useFetch";
import { log } from "../../../lab/devlog"; // lab

const URL = "https://jsonplaceholder.typicode.com/todos";

function TareasDeUsuario({ usuarioId }) {
  const { datos, cargando, error } = useFetch(`${URL}?userId=${usuarioId}&_limit=4`);
  log("render", "TareasDeUsuario", { usuarioId, cargando }); // lab

  if (cargando) return <p className="alerta alerta-advertencia">Cargando tareas...</p>;
  if (error) return <p className="alerta alerta-error">Error: {error}</p>;

  return (
    <ul className="lista">
      {datos.map((t) => (
        <li key={t.id} className="lista-item">
          <span>
            <span className="texto-secundario">usuario {t.userId} · </span>
            {t.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TareasDeUsuario;
