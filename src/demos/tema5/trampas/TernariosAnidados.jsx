// ❌ Ternarios anidados: funciona, pero cuesta leerlo
function TernariosAnidados({ estado }) {
  return (
    <div>
      {estado === "cargando" ? (
        <p className="alerta alerta-advertencia">Cargando...</p>
      ) : estado === "error" ? (
        <p className="alerta alerta-error">Algo salió mal</p>
      ) : estado === "vacio" ? (
        <p className="texto-secundario">No hay datos</p>
      ) : (
        <p>Datos listos</p>
      )}
    </div>
  );
}

export default TernariosAnidados;
