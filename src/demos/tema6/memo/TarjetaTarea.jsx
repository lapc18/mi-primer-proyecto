import { memo } from "react";
import { log } from "../../../lab/devlog"; // lab

function TarjetaTarea({ id, titulo, onEliminar }) {
  console.log("render:", titulo);
  log("render", `✅ TarjetaTarea (memo): ${titulo}`); // lab
  return (
    <div className="tarjeta t6-tarjeta">
      <h3>{titulo}</h3>
      <button className="boton boton-chico boton-peligro" onClick={() => onEliminar(id)}>X</button>
    </div>
  );
}

export default memo(TarjetaTarea);
