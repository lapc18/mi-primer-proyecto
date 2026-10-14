import "./App.css";
import { useState } from "react";
import Tarjeta from "./componentes/Tarjeta/Tarjeta";

const EQUIPO = [
  { id: 1, nombre: "Ana", rol: "Frontend", emoji: "💸" },

  { id: 2, nombre: "Luis", rol: "Backend", emoji: "🎶" },

  { id: 3, nombre: "Sara", rol: "Diseño", emoji: "💁🏽" },
];

function App() {
  const [equipo, setEquipo] = useState(EQUIPO);
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");

  const agregar = () => {
    if (nombre.trim().length <= 0 || rol.trim().length <= 0) return;

    const newEquipo = [...equipo];
    newEquipo.push({ nombre, rol, id: new Date() });

    setEquipo(newEquipo);

    setNombre("")
    setRol("")

    // Forma pro:
    // setEquipo((prev) => [...prev, { nombre, equipo, id: new Date() }])
  };

  return (
    <>
      <h1>SOY LA MAXIMA</h1>
      <section id="todo-container">
        <h3>Mi TODO App</h3>
        <div className="container">
          {/* .5 jensi */}
          <input
            id="nombre"
            type="text"
            placeholder="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            id="rol"
            placeholder="rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)} 
          />
          {/* .5 para juan soriano */}
          <button type="button" onClick={agregar}>
            Agregar
          </button>
        </div>
        <section className="lista">
          {equipo.map((e, index) => (
            <Tarjeta key={index} nombre={e.nombre} rol={e.rol} />
          ))}
        </section>
      </section>
    </>
  );
}

export default App;
