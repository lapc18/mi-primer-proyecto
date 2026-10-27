import { NavLink } from "react-router";
import useTema from "../../hooks/useTema";
import useTareas from "../../hooks/useTareas";
import "../../taskflow7/components/Navbar.css";
import { log } from "../../lab/devlog"; // lab

function Navbar() {
  const { tema, alternar } = useTema();
  const { tareas } = useTareas();
  const pendientes = tareas.filter((t) => t.estado === "Pendiente").length;
  log("render", "Navbar: useTema() + useTareas()", { tema, pendientes }); // lab

  return (
    <nav className="navbar">
      <span className="logo">TaskFlow</span>
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/tareas">Tareas ({pendientes})</NavLink>
      <button onClick={alternar}>
        {tema === "claro" ? "Modo oscuro" : "Modo claro"}
      </button>
    </nav>
  );
}

export default Navbar;
