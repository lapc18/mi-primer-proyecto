import FilaEstudiante from "./FilaEstudiante";
import { log } from "../../../lab/devlog"; // lab

function Lista({ datos }) {
  log("render", "Lista recibe datos por props", { total: datos.length }); // lab
  return (
    <ul className="lista">
      {datos.map((e) => (
        <FilaEstudiante key={e.id} nombre={e.nombre} curso={e.curso} />
      ))}
    </ul>
  );
}

export default Lista;
