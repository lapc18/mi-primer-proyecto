import { useEffect, useState } from "react";
import Encabezado from "./Encabezado";
import Buscador from "./Buscador";
import FormularioTarea from "./FormularioTarea";
import ListaTareas from "./ListaTareas";
import adaptar from "./adaptar";
import { log } from "../lab/devlog"; // lab

const URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";
const TITULO_LAB = "Laboratorio React – Talendig"; // lab

function App() {
  const [tareas, setTareas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    log("effect", "[]: cargar tareas solo al montar"); // lab
    const cargar = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Error de red");
        const datos = await res.json();
        setTareas(adaptar(datos));
        log("state", "setTareas(adaptar(datos))", adaptar(datos)[0]); // lab
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, []);

  const pendientes = tareas.filter((t) => t.estado === "Pendiente").length;

  useEffect(() => {
    document.title = `(${pendientes}) TaskFlow`;
    log("effect", "[pendientes]: document.title actualizado", { titulo: document.title }); // lab
    return () => { document.title = TITULO_LAB; }; // lab
  }, [pendientes]);

  const agregar = (titulo) => {
    const nueva = { id: Date.now(), titulo, estado: "Pendiente" };
    setTareas((prev) => [...prev, nueva]);
  };

  const tareasFiltradas = tareas.filter((t) =>
    t.titulo.toLowerCase().includes(busqueda.toLowerCase()),
  );
  log("render", "App", { cargando, error, pendientes, visibles: tareasFiltradas.length }); // lab

  if (cargando) return <p className="alerta alerta-advertencia">Cargando tareas...</p>;
  if (error) return <p className="alerta alerta-error">Error: {error}</p>;

  return (
    <main className="taskflow">
      <Encabezado total={tareas.length} pendientes={pendientes} />
      <FormularioTarea onAgregar={agregar} />
      <Buscador valor={busqueda} onBuscar={setBusqueda} />
      <ListaTareas tareas={tareasFiltradas} />
    </main>
  );
}

export default App;
