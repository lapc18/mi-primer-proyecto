// Mini app del laboratorio: un contador (estado) y dos rutas.
import { useState } from "react";
import { Route, Routes } from "react-router";
import { log } from "../../../lab/devlog";

function AppContador({ children }) {
  const [clics, setClics] = useState(0);

  const sumar = () => {
    log("state", "clics + 1", { de: clics, a: clics + 1 });
    setClics((prev) => prev + 1);
  };

  return (
    <div className="pila">
      {children}
      <div>
        <button type="button" className="boton boton-secundario" onClick={sumar}>
          Estado de la app: {clics} clics
        </button>
      </div>
      <Routes>
        <Route path="/" element={<p>Página de inicio</p>} />
        <Route path="/tareas" element={<p>Lista de tareas</p>} />
      </Routes>
    </div>
  );
}

export default AppContador;
