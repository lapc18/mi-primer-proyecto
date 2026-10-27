import { NavLink } from "react-router";
import "../../../taskflow7/components/Navbar.css";

// Sin end en Inicio: la trampa clásica de "Inicio siempre activo"
function NavbarSinEnd() {
  return (
    <nav className="navbar">
      <span className="logo">TaskFlow</span>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/tareas">Tareas</NavLink>
    </nav>
  );
}

export default NavbarSinEnd;
