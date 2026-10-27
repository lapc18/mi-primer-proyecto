import { useContext } from "react";
import { TemaContext } from "../../../context/TemaContext";
import { log } from "../../../lab/devlog"; // lab

function Tarjeta() {
  const { tema } = useContext(TemaContext);
  log("render", "Tarjeta lee el tema con useContext", { tema }); // lab

  return (
    <article className="tarjeta">
      <h3>Tema actual: {tema}</h3>
      <p>Se recuerda al recargar: useLocalStorage guarda tf-tema.</p>
    </article>
  );
}

export default Tarjeta;
