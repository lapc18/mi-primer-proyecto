import { Link, Route, Routes } from "react-router";
import VistaInicio from "./VistaInicio";
import VistaTareas from "./VistaTareas";
import VistaPerfil from "./VistaPerfil";
import { log } from "../../../lab/devlog"; // lab

// ✅ Con React Router: cada vista tiene su URL
function AppConRouter() {
  log("render", "AppConRouter"); // lab
  return (
    <div className="pila">
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/tareas">Tareas</Link>
        <Link to="/perfil">Perfil</Link>
      </nav>
      <Routes>
        <Route path="/" element={<VistaInicio />} />
        <Route path="/tareas" element={<VistaTareas />} />
        <Route path="/perfil" element={<VistaPerfil />} />
      </Routes>
    </div>
  );
}

export default AppConRouter;
