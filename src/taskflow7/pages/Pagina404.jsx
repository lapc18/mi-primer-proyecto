import { Link } from "react-router";
import { log } from "../../lab/devlog"; // lab

function Pagina404() {
  log("render", "Pagina404: ninguna ruta coincide"); // lab
  return (
    <section className="pagina404">
      <h1>404</h1>
      <p>Esta página no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}

export default Pagina404;
