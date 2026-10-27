import useTema from "../../../hooks/useTema";
import { log } from "../../../lab/devlog"; // lab

function Navbar() {
  const { tema, alternar } = useTema();
  log("render", "Navbar: useTema()", { tema }); // lab

  return (
    <nav className="navbar">
      <span className="logo">TaskFlow</span>
      <button onClick={alternar}>
        {tema === "claro" ? "Modo oscuro" : "Modo claro"}
      </button>
    </nav>
  );
}

export default Navbar;
