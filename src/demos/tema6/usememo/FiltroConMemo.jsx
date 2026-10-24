import { useMemo } from "react";
import { log } from "../../../lab/devlog"; // lab

function FiltroConMemo({ tareas, busqueda }) {
  const tareasFiltradas = useMemo(() => {
    log("calculo", `✅ filter() sobre ${tareas.length} tareas (useMemo recalcula)`); // lab
    return tareas.filter((t) =>
      t.titulo.toLowerCase().includes(busqueda)
    );
  }, [tareas, busqueda]);

  return (
    <p>
      <strong>{tareasFiltradas.length}</strong> resultados
    </p>
  );
}

export default FiltroConMemo;
