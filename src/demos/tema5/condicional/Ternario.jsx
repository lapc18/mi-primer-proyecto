// Técnica 1: ternario. Elige entre DOS caminos dentro del JSX.
function Ternario({ estado, usuarios }) {
  return (
    <div>
      {estado === "cargando" ? (
        <p className="alerta alerta-advertencia">Cargando...</p>
      ) : (
        <p>Listo: {usuarios.length} usuarios</p>
      )}
    </div>
  );
}

export default Ternario;
