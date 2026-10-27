import { useState } from "react";
import VistaInicio from "./VistaInicio";
import VistaTareas from "./VistaTareas";
import VistaPerfil from "./VistaPerfil";
import { log } from "../../../lab/devlog"; // lab

// ❌ Sin React Router: la vista es un estado y se elige con if
function AppSinRouter() {
  const [vista, setVista] = useState("inicio");
  log("render", `AppSinRouter: vista = "${vista}" (la URL no cambia)`); // lab

  let pagina;
  if (vista === "inicio") pagina = <VistaInicio />;
  else if (vista === "tareas") pagina = <VistaTareas />;
  else pagina = <VistaPerfil />;

  return (
    <div className="pila">
      <nav className="navbar">
        <button onClick={() => setVista("inicio")}>Inicio</button>
        <button onClick={() => setVista("tareas")}>Tareas</button>
        <button onClick={() => setVista("perfil")}>Perfil</button>
      </nav>
      {pagina}
    </div>
  );
}

export default AppSinRouter;
