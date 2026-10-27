// Envoltura del laboratorio: el mismo router con la Navbar de la slide (con end) o sin end.
import { useState } from "react";
import { Route, Routes } from "react-router";
import "../tema7.css";
import Navbar from "../../../taskflow7/components/Navbar";
import NavbarSinEnd from "./NavbarSinEnd";
import HomePage from "../rutas/pages/HomePage";
import TareasPage from "../rutas/pages/TareasPage";
import DetallePage from "../rutas/pages/DetallePage";
import Pagina404 from "../rutas/pages/Pagina404";
import NavegadorSimulado from "../../../lab/NavegadorSimulado";
import { log } from "../../../lab/devlog";

function DemoNavLink() {
  const [conEnd, setConEnd] = useState(true);

  const cambiar = (e) => {
    log("state", e.target.checked ? 'Inicio con end: <NavLink to="/" end>' : 'Inicio sin end: <NavLink to="/">');
    setConEnd(e.target.checked);
  };

  return (
    <div className="pila">
      <div className="lab-controles">
        <label className="fila">
          <input type="checkbox" checked={conEnd} onChange={cambiar} />
          <span>
            Usar <code>end</code> en Inicio
          </span>
        </label>
        <p className="texto-secundario">
          Quítalo y entra a /tareas: en React Router 8, Inicio ya no se queda marcado. En /tareas/42, Tareas sigue activo porque la URL empieza con /tareas/.
        </p>
      </div>
      <NavegadorSimulado atajos={["/", "/tareas", "/tareas/42"]}>
        {conEnd ? <Navbar /> : <NavbarSinEnd />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tareas" element={<TareasPage />} />
          <Route path="/tareas/:id" element={<DetallePage />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </NavegadorSimulado>
    </div>
  );
}

export default DemoNavLink;
