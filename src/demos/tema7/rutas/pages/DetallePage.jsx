import { useParams } from "react-router";
import { log } from "../../../../lab/devlog"; // lab

function DetallePage() {
  const { id } = useParams();
  log("render", 'Routes eligió path="/tareas/:id" → DetallePage', { id }); // lab
  return (
    <section className="t7-pagina">
      <h2>Tarea #{id}</h2>
    </section>
  );
}

export default DetallePage;
