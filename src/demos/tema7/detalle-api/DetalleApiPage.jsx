import { Link, useParams } from "react-router";
import useFetch from "../../../hooks/useFetch";
import { log } from "../../../lab/devlog"; // lab

const API = "https://jsonplaceholder.typicode.com/todos";

function DetalleApiPage() {
  const { id } = useParams();
  const { datos, cargando, error } = useFetch(`${API}/${id}`);
  log("render", "DetalleApiPage (sigue montada al cambiar de :id)", { id, cargando, error, titulo: datos?.title }); // lab

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <article className="detalle">
      <h1>{datos.title}</h1>
      <Link to="/tareas">← Volver</Link>
      <Link to={`/tareas/${Number(id) + 1}`}>Siguiente →</Link>
    </article>
  );
}

export default DetalleApiPage;
