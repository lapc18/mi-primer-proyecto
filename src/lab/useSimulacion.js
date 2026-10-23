import { useEffect, useState } from "react";
import { setModoFetch } from "./simuladorFetch";

// Estado de los controles de red de una demo. `ejecucion` se usa como key
// para remontar la demo cada vez que se elige un modo.
export default function useSimulacion() {
  const [modo, setModo] = useState("exito");
  const [ejecucion, setEjecucion] = useState(0);

  useEffect(() => {
    return () => setModoFetch("exito");
  }, []);

  const cambiar = (nuevoModo) => {
    setModoFetch(nuevoModo);
    setModo(nuevoModo);
    setEjecucion((prev) => prev + 1);
  };

  return { modo, ejecucion, cambiar };
}
