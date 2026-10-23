import { useState } from "react";
import Buscador from "./Buscador";
import ListaTareas from "./ListaTareas";
import { log } from "../../../lab/devlog"; // lab

const TAREAS = [
  { id: 1, titulo: "Repasar props" },
  { id: 2, titulo: "Practicar useState" },
  { id: 3, titulo: "Leer sobre eventos" },
  { id: 4, titulo: "Preparar el proyecto" },
];

function App() {
  const [busqueda, setBusqueda] = useState("");

  const tareasFiltradas = TAREAS.filter((t) =>
    t.titulo.toLowerCase().includes(busqueda.toLowerCase()),
  );
  log("render", "App", { busqueda, visibles: tareasFiltradas.length }); // lab

  return (
    <div className="pila">
      <Buscador valor={busqueda} onBuscar={setBusqueda} />
      <ListaTareas tareas={tareasFiltradas} />
    </div>
  );
}

export default App;
