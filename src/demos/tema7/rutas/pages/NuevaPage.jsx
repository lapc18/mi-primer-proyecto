import { log } from "../../../../lab/devlog"; // lab

function NuevaPage() {
  log("render", 'Routes eligió path="/tareas/nueva" → NuevaPage (le gana a :id)'); // lab
  return (
    <section className="t7-pagina">
      <h2>Nueva tarea</h2>
      <p>/tareas/nueva también coincide con /tareas/:id, pero es más específica.</p>
    </section>
  );
}

export default NuevaPage;
