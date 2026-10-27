import { Link } from "react-router";
import { log } from "../../../../lab/devlog"; // lab

function Pagina404() {
  log("render", 'Routes eligió path="*" → Pagina404'); // lab
  return (
    <section className="t7-pagina">
      <h2>404 · Página no encontrada</h2>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}

export default Pagina404;
