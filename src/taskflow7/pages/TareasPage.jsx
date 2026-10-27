import { useMemo, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useFetch from "../../hooks/useFetch";
import Buscador from "../../taskflow/Buscador";
import FormularioTarea from "../../taskflow/FormularioTarea";
import adaptar from "../../taskflow/adaptar";
import TarjetaTarea from "../components/TarjetaTarea";
import { log } from "../../lab/devlog"; // lab

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

function TareasPage({ tareas, setTareas }) {
  const [busqueda, setBusqueda] = useState("");
  const busquedaDebounced = useDebounce(busqueda, 400);
  const { datos, cargando, error } = useFetch(API_URL);
  log("render", "TareasPage", { tareas: tareas.length, busquedaDebounced }); // lab

  const cargarEjemplos = () => {
    setTareas(adaptar(datos));
  };

  const agregar = (titulo) => {
    const nueva = { id: Date.now(), titulo, estado: "Pendiente" };
    setTareas((prev) => [...prev, nueva]);
  };

  const filtradas = useMemo(() => {
    const texto = busquedaDebounced.toLowerCase();
    return tareas.filter((t) => t.titulo.toLowerCase().includes(texto));
  }, [tareas, busquedaDebounced]);

  return (
    <section className="tf7-pagina">
      <h1>Tareas</h1>
      <FormularioTarea onAgregar={agregar} />
      <Buscador valor={busqueda} onBuscar={setBusqueda} />
      {tareas.length === 0 ? (
        <div className="alerta alerta-info pila">
          <p>No tienes tareas guardadas.</p>
          {error && <p className="alerta alerta-error">No se pudieron cargar los ejemplos: {error}</p>}
          <button className="boton boton-primario" onClick={cargarEjemplos} disabled={cargando || error !== null}>
            {cargando ? "Cargando ejemplos..." : "Cargar 5 tareas de ejemplo"}
          </button>
        </div>
      ) : (
        <div className="tf7-lista">
          {filtradas.map((t) => (
            <TarjetaTarea key={t.id} {...t} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TareasPage;
