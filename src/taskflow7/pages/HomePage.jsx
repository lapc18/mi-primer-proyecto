import { Link } from "react-router";
import { log } from "../../lab/devlog"; // lab

function HomePage() {
  log("render", "HomePage"); // lab
  return (
    <section className="tf7-pagina">
      <h1>Bienvenido a TaskFlow</h1>
      <p>Organiza tus tareas y revisa el detalle de cada una.</p>
      <Link to="/tareas">Ver tareas</Link>
    </section>
  );
}

export default HomePage;
