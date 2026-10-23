import { log } from "../../../lab/devlog"; // lab

function Buscador({ valor, onBuscar }) {
  log("render", "Buscador recibe valor del padre", { valor }); // lab

  const manejarCambio = (e) => {
    log("event", "onBuscar sube el texto al padre", { texto: e.target.value }); // lab
    onBuscar(e.target.value);
  };

  return (
    <input
      className="campo"
      placeholder="Buscar..."
      value={valor}
      onChange={manejarCambio}
    />
  );
}

export default Buscador;
