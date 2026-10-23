const MODOS = {
  exito: {
    etiqueta: "Éxito",
    detalle: "Petición real a jsonplaceholder.",
  },
  demora: {
    etiqueta: "Demora 2 s",
    detalle: "Espera 2 segundos antes de pedir: se ve el estado cargando.",
  },
  error404: {
    etiqueta: "Error 404",
    detalle:
      "Pide una ruta que no existe: el servidor responde, pero res.ok es false. La consola del navegador mostrará el 404 a propósito.",
  },
  sinRed: {
    etiqueta: "Sin red",
    detalle:
      "Pide a un dominio inexistente: fetch lanza un error y cae en el catch. La consola del navegador mostrará el error de red a propósito.",
  },
  carrera: {
    etiqueta: "Demora aleatoria",
    detalle:
      "Cada respuesta tarda entre 0,3 y 2,5 s. Cambia de usuario rápido para provocar una condición de carrera.",
  },
};

function ControlesFetch({ modos, modo, onCambiar }) {
  return (
    <div className="lab-controles">
      <div className="fila" role="group" aria-label="Simular la red">
        <span className="etiqueta">Simular red:</span>
        {modos.map((m) => (
          <button
            key={m}
            type="button"
            className={
              m === modo
                ? "boton boton-chico boton-primario"
                : "boton boton-chico boton-secundario"
            }
            aria-pressed={m === modo}
            onClick={() => onCambiar(m)}
          >
            {MODOS[m].etiqueta}
          </button>
        ))}
      </div>
      <p className="texto-secundario">
        {MODOS[modo].detalle} Pulsa de nuevo un modo para repetir la carga.
      </p>
    </div>
  );
}

export default ControlesFetch;
