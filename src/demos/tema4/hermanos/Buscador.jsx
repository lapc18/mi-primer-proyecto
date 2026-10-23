import { log } from "../../../lab/devlog"; // lab

function Buscador({ valor, onBuscar }) {
  log("render", "Buscador", { valor }); // lab

  const limpiar = () => {
    log("event", "✕ llama a onBuscar(\"\")"); // lab
    onBuscar("");
  };

  return (
    <div className="fila">
      <input
        className="campo"
        placeholder="Buscar tarea..."
        value={valor}
        onChange={(e) => onBuscar(e.target.value)}
      />
      <button
        className="boton boton-secundario"
        onClick={limpiar}
        disabled={valor === ""}
        aria-label="Limpiar búsqueda"
      >
        ✕
      </button>
    </div>
  );
}

export default Buscador;
