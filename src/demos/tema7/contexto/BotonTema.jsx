import { useContext } from "react";
import { TemaContext } from "../../../context/TemaContext";
import { log } from "../../../lab/devlog"; // lab

function BotonTema() {
  const { tema, alternar } = useContext(TemaContext);
  log("render", "BotonTema lee el tema con useContext", { tema }); // lab

  return (
    <button onClick={alternar}>
      {tema === "claro" ? "Modo oscuro" : "Modo claro"}
    </button>
  );
}

export default BotonTema;
