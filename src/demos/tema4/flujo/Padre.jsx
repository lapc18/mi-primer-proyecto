import { useState } from "react";
import Hijo from "./Hijo";
import { log } from "../../../lab/devlog"; // lab

function Padre() {
  const [tareas, setTareas] = useState(0);
  log("render", "Padre", { tareas }); // lab

  const agregar = () => {
    log("event", "⬆ Evento sube: el Padre recibe la llamada a onAgregar"); // lab
    setTareas((prev) => prev + 1);
    log("state", "Padre actualiza su state", { de: tareas, a: tareas + 1 }); // lab
  };

  return (
    <section className="tarjeta pila">
      <h3>Padre</h3>
      <p className="texto-secundario">State del padre: tareas = {tareas}</p>
      <Hijo titulo={`Tienes ${tareas} tareas`} onAgregar={agregar} />
    </section>
  );
}

export default Padre;
