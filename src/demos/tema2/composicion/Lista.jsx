import Tarjeta from "../tarjetas/Tarjeta";
import { log } from "../../../lab/devlog"; // lab

function Lista({ datos }) {
  log("render", "Lista", { total: datos.length }); // lab
  return (
    <div className="tarjetas">
      {datos.map((p) => (
        <Tarjeta key={p.id} nombre={p.nombre} rol={p.rol} emoji={p.emoji} />
      ))}
    </div>
  );
}

export default Lista;
