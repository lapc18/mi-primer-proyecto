// ✅ MEJOR
import { Link } from "react-router";

function NavbarConLink() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/tareas">Ver tareas</Link>
    </nav>
  );
}

export default NavbarConLink;
