import useFetch from "../../../hooks/useFetch";
import { log } from "../../../lab/devlog"; // lab

const URL = "https://jsonplaceholder.typicode.com/users?_limit=4";

function ListaUsuarios() {
  const { datos, cargando, error } = useFetch(URL);
  log("render", "ListaUsuarios", { cargando, error }); // lab

  if (cargando) return <p className="alerta alerta-advertencia">Cargando usuarios...</p>;
  if (error) return <p className="alerta alerta-error">Error: {error}</p>;

  return (
    <ul className="lista">
      {datos.map((u) => (
        <li key={u.id} className="lista-item">
          {u.name}
        </li>
      ))}
    </ul>
  );
}

export default ListaUsuarios;
