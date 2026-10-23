import "./Tarjeta.css";
import { log } from "../../../lab/devlog"; // lab

function Tarjeta({ nombre, rol, emoji }) {
  log("render", `Tarjeta de ${nombre}`, { nombre, rol, emoji }); // lab
  return (
    <article className="tarjeta tarjeta-persona">
      <span className="tarjeta-emoji" aria-hidden="true">
        {emoji}
      </span>
      <h3>{nombre}</h3>
      <p className="texto-secundario">{rol}</p>
    </article>
  );
}

export default Tarjeta;
