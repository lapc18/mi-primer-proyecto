import { useState } from "react";
import TarjetaTarea from "../memo/TarjetaTarea";
import TAREAS from "../memo/tareasMemo";
import { log } from "../../../lab/devlog"; // lab

function ListaSinCallback() {
  const [tareas, setTareas] = useState(TAREAS);
  const [contador, setContador] = useState(0);

  const eliminar = (id) => {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  };
  log("render", "❌ ListaSinCallback: eliminar es una función nueva"); // lab

  return (
    <div className="pila">
      <button className="boton boton-secundario" onClick={() => setContador((prev) => prev + 1)}>
        Contador: {contador}
      </button>
      {tareas.map((t) => (
        <TarjetaTarea key={t.id} {...t} onEliminar={eliminar} />
      ))}
    </div>
  );
}

export default ListaSinCallback;
