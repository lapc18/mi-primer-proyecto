import BotonTema from "./BotonTema";
import { log } from "../../../lab/devlog"; // lab

// Navbar ya no recibe ni pasa el tema
function Navbar() {
  log("render", "Navbar (sin props)"); // lab
  return (
    <nav className="navbar">
      <span className="logo">TaskFlow</span>
      <BotonTema />
    </nav>
  );
}

export default Navbar;
