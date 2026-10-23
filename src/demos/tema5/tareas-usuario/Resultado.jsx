function Resultado({ usuarioId, tareas, cargando, error }) {
  if (cargando) return <p className="alerta alerta-advertencia">Cargando tareas...</p>;
  if (error) return <p className="alerta alerta-error">Error: {error}</p>;

  return (
    <div className="pila">
      <p>
        Usuario {usuarioId}: <strong>{tareas.length} tareas</strong>
      </p>
      <ul className="lista">
        {tareas.map((t) => (
          <li key={t.id} className="lista-item">
            <span>
              <span className="texto-secundario">usuario {t.userId} · </span>
              {t.title}
            </span>
            <span className={t.completed ? "badge badge-exito" : "badge badge-pendiente"}>
              {t.completed ? "Completada" : "Pendiente"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resultado;
