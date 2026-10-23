function Buscador({ valor, onBuscar }) {
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
        onClick={() => onBuscar("")}
        disabled={valor === ""}
        aria-label="Limpiar búsqueda"
      >
        ✕
      </button>
    </div>
  );
}

export default Buscador;
