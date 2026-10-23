import "./TaskFlow.css";
import { log } from "../lab/devlog"; // lab

function Encabezado({ total, pendientes }) {
  log("render", "Encabezado", { total, pendientes }); // lab
  return (
    <header className="taskflow-encabezado">
      <h2>TaskFlow</h2>
      <div className="taskflow-contadores">
        <span className="pill">Total: {total}</span>
        <span className="pill">Pendientes: {pendientes}</span>
      </div>
    </header>
  );
}

export default Encabezado;
