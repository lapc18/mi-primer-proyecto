import { useState } from "react";
import { useNavigate } from "react-router";
import { log } from "../../../lab/devlog"; // lab

function NuevaTarea({ onAgregar }) {
  const [titulo, setTitulo] = useState("");
  const navigate = useNavigate();

  const guardar = (e) => {
    e.preventDefault();
    onAgregar(titulo);
    log("ruta", 'Después de guardar: navigate("/tareas")'); // lab
    navigate("/tareas");
  };

  return (
    <form onSubmit={guardar}>
      <input
        placeholder="Título de la tarea"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default NuevaTarea;
