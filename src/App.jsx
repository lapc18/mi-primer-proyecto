import "./App.css";
import { useState } from "react";
import Buscador from "./componentes/Buscador/Buscador";
import Lista from "./componentes/Lista/Lista";
import Formulario from "./componentes/Formulario/Formulario";

const EQUIPO = [
  { id: 1, nombre: "Ana", rol: "Frontend", emoji: "💸" },

  { id: 2, nombre: "Luis", rol: "Backend", emoji: "🎶" },

  { id: 3, nombre: "Sara", rol: "Diseño", emoji: "💁🏽" },
];

function App() {
  const [equipo, setEquipo] = useState(EQUIPO);
  const [buscar, setBuscar] = useState("");

  const agregar = (nombre, rol) => {

    const newEquipo = [...equipo];
    newEquipo.push({ nombre, rol, id: new Date() });

    setEquipo(newEquipo);

    // Forma pro:
    // setEquipo((prev) => [...prev, { nombre, equipo, id: new Date() }])
  };

  const equipoFiltrado = equipo.filter((x) =>
    x.nombre.toLowerCase().includes(buscar.toLowerCase()),
  );

  return (
    <>
      <h1>SOY LA MAXIMA</h1>
      <Buscador onBuscar={setBuscar} />
      <Formulario onAgregar={agregar} />
      <Lista lista={equipoFiltrado} />
    </>
  );
}

export default App;
