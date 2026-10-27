import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregar, eliminar } from "../../../store/tareasSlice";
import { log } from "../../../lab/devlog"; // lab

function TareasRedux() {
  const tareas = useSelector((s) => s.tareas);
  const dispatch = useDispatch();
  const [titulo, setTitulo] = useState("");
  log("render", "TareasRedux: useSelector((s) => s.tareas)", { tareas: tareas.length }); // lab

  const guardar = (e) => {
    e.preventDefault();
    if (titulo.trim() === "") return;
    log("state", "dispatch(agregar({ id: Date.now(), titulo }))", { titulo }); // lab
    dispatch(agregar({ id: Date.now(), titulo }));
    setTitulo("");
  };

  const quitar = (id) => {
    log("state", "dispatch(eliminar(id))", { id }); // lab
    dispatch(eliminar(id));
  };

  return (
    <div className="pila">
      <form className="fila" onSubmit={guardar}>
        <input
          className="campo"
          placeholder="Nueva tarea"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <button className="boton boton-primario" type="submit">
          Agregar
        </button>
      </form>
      <ul className="lista">
        {tareas.map((t) => (
          <li key={t.id} className="lista-item">
            {t.titulo}
            <button className="boton boton-chico boton-peligro" onClick={() => quitar(t.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TareasRedux;
