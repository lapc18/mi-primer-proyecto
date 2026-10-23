import { useState } from "react";
import Buscador from "./Buscador";
import { log } from "../../../lab/devlog"; // lab

function App() {
  const [busqueda, setBusqueda] = useState("");
  log("render", "App (dueño del state busqueda)", { busqueda }); // lab

  return (
    <div className="pila">
      <Buscador valor={busqueda} onBuscar={setBusqueda} />
      <p>
        Buscando: <strong>{busqueda}</strong>
      </p>
    </div>
  );
}

export default App;
