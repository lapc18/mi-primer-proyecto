import { useEffect, useState } from "react";
import { log } from "../../../lab/devlog";

function Efectos() {
  const [clics, setClics] = useState(0);
  const [usuario, setUsuario] = useState(1);
  log("render", "Efectos", { clics, usuario }); // lab

  // 1. Sin array: corre después de CADA render
  useEffect(() => {
    log("effect", "Sin array: corre en cada render");
  });

  // 2. Array vacío: corre UNA sola vez, al montar
  useEffect(() => {
    log("effect", "[]: solo al montar");
  }, []);

  // 3. Con dependencia: corre al montar y cuando cambia usuario
  useEffect(() => {
    log("effect", `[usuario]: usuario es ${usuario}`);
  }, [usuario]);

  const forzarRender = () => {
    log("event", "Forzar render (cambia clics, no usuario)"); // lab
    setClics((prev) => prev + 1);
  };

  const cambiarUsuario = () => {
    log("event", "Cambiar usuario"); // lab
    setUsuario((prev) => (prev === 3 ? 1 : prev + 1));
  };

  return (
    <div className="pila">
      <p>
        Clics: <strong>{clics}</strong> · Usuario: <strong>{usuario}</strong>
      </p>
      <div className="fila">
        <button className="boton boton-secundario" onClick={forzarRender}>
          Forzar render
        </button>
        <button className="boton boton-primario" onClick={cambiarUsuario}>
          Cambiar usuario
        </button>
      </div>
    </div>
  );
}

export default Efectos;
