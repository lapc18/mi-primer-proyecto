// Envoltura del laboratorio: la app dentro de <TemaProvider> o, a propósito, fuera de él.
import { useState } from "react";
import "../../../taskflow7/components/Navbar.css";
import TemaProvider from "../../../context/TemaProvider";
import LimiteError from "../../../lab/LimiteError";
import App from "./App";
import { log } from "../../../lab/devlog";

function DemoTema() {
  const [fuera, setFuera] = useState(false);

  const cambiar = (e) => {
    log("event", e.target.checked ? "Renderizar App fuera del Provider" : "Volver a envolver App en <TemaProvider>");
    setFuera(e.target.checked);
  };

  return (
    <div className="pila">
      <div className="lab-controles">
        <label className="fila">
          <input type="checkbox" checked={fuera} onChange={cambiar} />
          <span>Renderizar fuera del Provider</span>
        </label>
        <p className="texto-secundario">
          useTema lanza un error claro y LimiteError lo atrapa. La consola del navegador mostrará ese error a propósito.
        </p>
      </div>
      {fuera ? (
        <LimiteError key="fuera">
          <App />
        </LimiteError>
      ) : (
        <TemaProvider>
          <App />
        </TemaProvider>
      )}
    </div>
  );
}

export default DemoTema;
