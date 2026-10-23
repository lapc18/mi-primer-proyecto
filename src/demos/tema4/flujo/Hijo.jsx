import { log } from "../../../lab/devlog"; // lab

function Hijo({ titulo, onAgregar }) {
  log("render", "⬇ Datos bajan: Hijo recibe props", { titulo }); // lab

  const manejarClick = () => {
    log("event", "Clic en el Hijo: llama a onAgregar()"); // lab
    onAgregar();
  };

  return (
    <div className="alerta pila">
      <h3>Hijo</h3>
      <p>{titulo}</p>
      <div>
        <button className="boton boton-primario" onClick={manejarClick}>
          Agregar tarea
        </button>
      </div>
    </div>
  );
}

export default Hijo;
