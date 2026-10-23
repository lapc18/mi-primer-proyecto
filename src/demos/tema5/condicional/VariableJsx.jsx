// Técnica 4: guardar el JSX en una variable antes del return.
function VariableJsx({ estado, usuarios }) {
  let contenido;

  if (estado === "cargando") {
    contenido = <p className="alerta alerta-advertencia">Cargando...</p>;
  } else if (estado === "error") {
    contenido = <p className="alerta alerta-error">Algo salió mal</p>;
  } else if (usuarios.length === 0) {
    contenido = <p className="texto-secundario">No hay usuarios</p>;
  } else {
    contenido = <p>Primer usuario: {usuarios[0].nombre}</p>;
  }

  return <section>{contenido}</section>;
}

export default VariableJsx;
