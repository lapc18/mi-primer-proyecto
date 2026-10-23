import { Fragment, StrictMode, useState } from "react";
import Laboratorio from "./Laboratorio";
import { limpiar } from "./devlog";

// StrictMode está activo por defecto. El interruptor de la barra superior lo
// quita o lo pone y, al cambiar la key, remonta toda la app.
function Raiz() {
  const [estricto, setEstricto] = useState(true);
  const Envoltura = estricto ? StrictMode : Fragment;

  const cambiarEstricto = () => {
    limpiar();
    setEstricto((prev) => !prev);
  };

  return (
    <Envoltura key={estricto ? "estricto" : "normal"}>
      <Laboratorio estricto={estricto} onCambiarEstricto={cambiarEstricto} />
    </Envoltura>
  );
}

export default Raiz;
