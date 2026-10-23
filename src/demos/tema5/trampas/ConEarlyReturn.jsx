// ✅ Early return: un caso por línea, se lee de arriba abajo
function ConEarlyReturn({ estado }) {
  if (estado === "cargando") return <p className="alerta alerta-advertencia">Cargando...</p>;
  if (estado === "error") return <p className="alerta alerta-error">Algo salió mal</p>;
  if (estado === "vacio") return <p className="texto-secundario">No hay datos</p>;

  return <p>Datos listos</p>;
}

export default ConEarlyReturn;
