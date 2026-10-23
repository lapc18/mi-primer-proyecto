import { useState } from "react";
import Encabezado from "../../../taskflow/Encabezado";
import Buscador from "../../../taskflow/Buscador";
import FormularioTarea from "../../../taskflow/FormularioTarea";
import ListaTareas from "../../../taskflow/ListaTareas";
import { log } from "../../../lab/devlog"; // lab

const TAREAS_INICIALES = [
  { id: 1, titulo: "Diseñar la pantalla principal", estado: "Completada" },
  { id: 2, titulo: "Crear el componente Encabezado", estado: "Pendiente" },
  { id: 3, titulo: "Conectar el buscador", estado: "Pendiente" },
];

function App() {
  const [tareas, setTareas] = useState(TAREAS_INICIALES);
  const [busqueda, setBusqueda] = useState("");

  const agregar = (titulo) => {
    const nueva = { id: Date.now(), titulo, estado: "Pendiente" };
    setTareas((prev) => [...prev, nueva]);
    log("state", "agregar: setTareas((prev) => [...prev, nueva])", nueva); // lab
  };

  const tareasFiltradas = tareas.filter((t) =>
    t.titulo.toLowerCase().includes(busqueda.toLowerCase()),
  );
  const pendientes = tareas.filter((t) => t.estado === "Pendiente").length;
  log("render", "App: datos derivados en el render", { pendientes, visibles: tareasFiltradas.length }); // lab

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
