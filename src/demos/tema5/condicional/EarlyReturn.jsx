// Técnica 3: early return. Cada caso especial sale antes.
function EarlyReturn({ estado, usuarios }) {
  if (estado === "cargando") return <p className="alerta alerta-advertencia">Cargando...</p>;
  if (estado === "error") return <p className="alerta alerta-error">Algo salió mal</p>;
  if (usuarios.length === 0) return <p className="texto-secundario">No hay usuarios</p>;

  return (
    <ul className="lista">
      {usuarios.map((u) => (
        <li key={u.id} className="lista-item">
          {u.nombre}
        </li>
      ))}
    </ul>
  );
}

export default EarlyReturn;
