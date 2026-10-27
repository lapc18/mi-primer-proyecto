// Controles del laboratorio dentro de <TareasProvider>. Las slides no traen
// formulario en TareasPage, así que aquí se cargan ejemplos y se marca una
// tarea "desde fuera" para ver qué tarjetas vuelven a renderizarse.
import useTareas from "../../../hooks/useTareas";
import { log } from "../../../lab/devlog";

const EJEMPLOS = ["Instalar React Router", "Crear TemaProvider", "Mover las tareas a Context"];

function PanelLabTareas() {
  const { tareas, agregar, completar } = useTareas();
  const pendiente = tareas.find((t) => t.estado === "Pendiente");

  // Una por clic: agregar usa Date.now() como id y dos en el mismo milisegundo chocarían.
  const cargar = () => {
    const titulo = EJEMPLOS[tareas.length % EJEMPLOS.length];
    log("event", `Lab: agregar("${titulo}")`);
    agregar(titulo);
  };

  const marcar = () => {
    log("event", `Lab: completar("${pendiente.titulo}")`);
    completar(pendiente.id);
  };

  return (
    <div className="lab-controles">
      <div className="fila">
        <button type="button" className="boton boton-chico boton-secundario" onClick={cargar}>
          + Tarea de ejemplo
        </button>
        <button type="button" className="boton boton-chico boton-primario" onClick={marcar} disabled={!pendiente}>
          Marcar la primera pendiente
        </button>
        <span className="texto-secundario">{tareas.length} tareas en tf-tareas</span>
      </div>
    </div>
  );
}

export default PanelLabTareas;
