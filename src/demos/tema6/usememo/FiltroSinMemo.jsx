import { log } from "../../../lab/devlog"; // lab

function FiltroSinMemo({ tareas, busqueda }) {
  const tareasFiltradas = tareas.filter((t) =>
    t.titulo.toLowerCase().includes(busqueda)
  );
  log("calculo", `❌ filter() sobre ${tareas.length} tareas`, { resultados: tareasFiltradas.length }); // lab

  return (
    <p>
      <strong>{tareasFiltradas.length}</strong> resultados
    </p>
  );
}

export default FiltroSinMemo;
