import { NavLink } from "react-router";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">TaskFlow</span>
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/tareas">Tareas</NavLink>
    </nav>
  );
}

export default Navbar;
