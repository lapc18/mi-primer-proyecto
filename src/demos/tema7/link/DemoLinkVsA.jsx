// Envoltura del laboratorio: un <a href> de verdad recargaría todo el laboratorio,
// así que aquí se simula la recarga completa remontando la app con key.
import { useState } from "react";
import "../../tema6/comparacion.css";
import "../../../taskflow7/components/Navbar.css";
import AppContador from "./AppContador";
import NavbarConA from "./NavbarConA";
import NavbarConLink from "./NavbarConLink";
import NavegadorSimulado from "../../../lab/NavegadorSimulado";
import { log } from "../../../lab/devlog";

function DemoLinkVsA() {
  const [recarga, setRecarga] = useState({ veces: 0, ruta: "/" });

  const simularRecarga = (e) => {
    const enlace = e.target.closest("a[href]");
    if (!enlace) return;
    e.preventDefault();
    const destino = enlace.getAttribute("href");
    log("event", `<a href="${destino}">: el navegador pide ${destino} al servidor y la app arranca desde cero`);
    log("state", "Recarga completa: el estado volvió a cero");
    setRecarga((prev) => ({ veces: prev.veces + 1, ruta: destino }));
  };

  return (
    <div className="t6-par">
      <div className="tarjeta t6-lado t6-lado-mal" onClickCapture={simularRecarga}>
        <h3>❌ {'<a href="/tareas">'}</h3>
        <NavegadorSimulado key={recarga.veces} inicial={recarga.ruta}>
          <AppContador>
            <NavbarConA />
          </AppContador>
        </NavegadorSimulado>
        <p className="texto-secundario">Recargas simuladas: {recarga.veces}</p>
      </div>
      <div className="tarjeta t6-lado t6-lado-bien">
        <h3>✅ {'<Link to="/tareas">'}</h3>
        <NavegadorSimulado>
          <AppContador>
            <NavbarConLink />
          </AppContador>
        </NavegadorSimulado>
      </div>
    </div>
  );
}

export default DemoLinkVsA;
