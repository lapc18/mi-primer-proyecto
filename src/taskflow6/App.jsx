import { useCallback, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";
import Encabezado from "../taskflow/Encabezado";
import FormularioTarea from "../taskflow/FormularioTarea";
import Buscador from "../taskflow/Buscador";
import adaptar from "../taskflow/adaptar";
import ListaTareas from "./ListaTareas";
import { log } from "../lab/devlog"; // lab

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

function App() {
  const [tareas, setTareas] = useLocalStorage("tf-tareas", []);
  const [busqueda, setBusqueda] = useState("");
  const busquedaDebounced = useDebounce(busqueda, 400);
  const { datos, cargando, error } = useFetch(API_URL);

  // Primera visita: el usuario decide si carga las tareas de la API
  const cargarEjemplos = () => {
    setTareas(adaptar(datos));
  };

  const agregar = (titulo) => {
    const nueva = { id: Date.now(), titulo, estado: "Pendiente" };
    setTareas((prev) => [...prev, nueva]);
  };

  const filtradas = useMemo(() => {
    log("calculo", "useMemo: filtrar tareas", { busquedaDebounced }); // lab
    const texto = busquedaDebounced.toLowerCase();
    return tareas.filter((t) => t.titulo.toLowerCase().includes(texto));
  }, [tareas, busquedaDebounced]);

  const eliminar = useCallback((id) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  }, [setTareas]);

  const pendientes = tareas.filter((t) => t.estado === "Pendiente").length;
  log("render", "App (TaskFlow 6)", { tareas: tareas.length, busqueda, busquedaDebounced }); // lab

  return (
    <main className="taskflow">
      <Encabezado total={tareas.length} pendientes={pendientes} />
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
        <ListaTareas tareas={filtradas} onEliminar={eliminar} />
      )}
    </main>
  );
}

export default App;
