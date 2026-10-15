// franklin 1
import { useState } from "react";

export default function Formulario({
    // eslint-disable-next-line no-unused-vars
    onAgregar = (nombre, rol) => {} // jensi 1
}) {
    // soriano 1
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");

  const guardar = () => {
    if (nombre.trim().length <= 0 || rol.trim().length <= 0) return;

    onAgregar(nombre, rol);

    setNombre("");
    setRol("");
  }

  // charles 1
  // jensi 1
  return (
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
        <button type="button" onClick={guardar}>
          Agregar
        </button>
      </div>
    </section>
  );
}
