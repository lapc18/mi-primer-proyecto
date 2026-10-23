import { useState } from "react";
import "./Eventos.css";
import { log } from "../../../lab/devlog"; // lab

function Eventos() {
  const [mensaje, setMensaje] = useState("Todavía no pasó nada");
  const [texto, setTexto] = useState("");
  const [encima, setEncima] = useState(false);

  const manejarClick = () => {
    log("event", "onClick"); // lab
    setMensaje("Hiciste clic en el botón");
  };

  const manejarCambio = (e) => {
    log("event", "onChange", { valor: e.target.value }); // lab
    setTexto(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    log("event", "onSubmit con preventDefault: la página no se recarga"); // lab
    setMensaje(`Enviaste: ${texto}`);
  };

  const manejarEntrada = () => {
    log("event", "onMouseEnter"); // lab
    setEncima(true);
  };

  const manejarSalida = () => {
    log("event", "onMouseLeave"); // lab
    setEncima(false);
  };

  const manejarTecla = (e) => {
    log("event", "onKeyDown", { tecla: e.key }); // lab
    if (e.key === "Enter") {
      setMensaje("Presionaste Enter");
    }
  };

  return (
    <div className="pila">
      <p className="alerta">{mensaje}</p>

      <button className="boton boton-primario" onClick={manejarClick}>
        Hazme clic
      </button>

      <form className="fila" onSubmit={manejarEnvio}>
        <input
          className="campo eventos-campo"
          placeholder="Escribe algo"
          value={texto}
          onChange={manejarCambio}
        />
        <button className="boton boton-secundario" type="submit">
          Enviar
        </button>
      </form>

      <div
        className={encima ? "eventos-zona eventos-zona-activa" : "eventos-zona"}
        onMouseEnter={manejarEntrada}
        onMouseLeave={manejarSalida}
      >
        {encima ? "El mouse está encima" : "Pasa el mouse por aquí"}
      </div>

      <input
        className="campo"
        placeholder="Presiona Enter aquí"
        onKeyDown={manejarTecla}
      />
    </div>
  );
}

export default Eventos;
