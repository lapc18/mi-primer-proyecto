import { useState } from "react";
import { log } from "../../../lab/devlog"; // lab

function TodoApp() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");
  log("render", "TodoApp", { tareas: tareas.length }); // lab

  const agregar = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;
    const nueva = { id: Date.now(), texto };
    setTareas((prev) => [...prev, nueva]);
    log("state", "Agregar: [...prev, nueva]", nueva); // lab
    setTexto("");
  };

  const eliminar = (id) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
    log("state", "Eliminar: prev.filter((t) => t.id !== id)", { id }); // lab
  };

  return (
    <div className="pila">
      <form className="fila" onSubmit={agregar}>
        <input
          className="campo"
          placeholder="Nueva tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button className="boton boton-primario" type="submit">
          Agregar
        </button>
      </form>

      {tareas.length === 0 && <p className="texto-secundario">No hay tareas todavía.</p>}

      <ul className="lista">
        {tareas.map((t) => (
          <li key={t.id} className="lista-item">
            {t.texto}
            <button
              className="boton boton-chico boton-secundario"
              onClick={() => eliminar(t.id)}
              aria-label={`Eliminar ${t.texto}`}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
