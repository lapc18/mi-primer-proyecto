import { useEffect, useState } from "react";
import { log } from "../../../lab/devlog"; // lab

function FiltroConEfecto({ tareas, busqueda }) {
  const [filtradas, setFiltradas] = useState([]);
  log("render", "❌ FiltroConEfecto", { filtradas: filtradas.length }); // lab

  useEffect(() => {
    log("calculo", "❌ filter() dentro del efecto"); // lab
    // eslint-disable-next-line react-hooks/set-state-in-effect -- antipatrón a propósito para la demo // lab
    setFiltradas(
      tareas.filter((t) => t.titulo.includes(busqueda))
    );
  }, [tareas, busqueda]);

  return (
    <ul className="lista">
      {filtradas.map((t) => (
        <li key={t.id} className="lista-item">
          {t.titulo}
        </li>
      ))}
    </ul>
  );
}

export default FiltroConEfecto;
