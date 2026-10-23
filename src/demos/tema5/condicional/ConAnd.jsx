// Técnica 2: &&. Muestra algo o nada.
function ConAnd({ estado, usuarios }) {
  return (
    <div>
      {estado === "cargando" && <p className="alerta alerta-advertencia">Cargando...</p>}
      {estado === "error" && <p className="alerta alerta-error">Algo salió mal</p>}
      {estado === "vacio" && <p className="texto-secundario">No hay usuarios</p>}
      {estado === "datos" && <p>Hay {usuarios.length} usuarios</p>}
    </div>
  );
}

export default ConAnd;
