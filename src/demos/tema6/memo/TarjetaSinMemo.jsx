import { log } from "../../../lab/devlog"; // lab

function TarjetaSinMemo({ id, titulo, onEliminar }) {
  console.log("render:", titulo);
  log("render", `❌ TarjetaSinMemo: ${titulo}`); // lab
  return (
    <div className="tarjeta t6-tarjeta">
      <h3>{titulo}</h3>
      <button className="boton boton-chico boton-peligro" onClick={() => onEliminar(id)}>X</button>
    </div>
  );
}

export default TarjetaSinMemo;
