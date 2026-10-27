import { useParams } from "react-router";
import { log } from "../../../lab/devlog"; // lab

const TAREAS = [
  { id: 1, titulo: "Instalar React Router" },
  { id: 42, titulo: "Leer el :id con useParams" },
];

function BuscarTarea() {
  const { id } = useParams();

  // ❌ 42 === "42" → false
  const sinNumber = TAREAS.find((t) => t.id === id);
  // ✅ 42 === 42 → true
  const conNumber = TAREAS.find((t) => t.id === Number(id));
  log("calculo", `find con id = ${JSON.stringify(id)} (typeof ${typeof id})`, { sinNumber: sinNumber?.titulo ?? "undefined", conNumber: conNumber?.titulo ?? "undefined" }); // lab

  return (
    <div className="pila">
      <p>
        typeof id: <strong className="t7-dato">{typeof id}</strong> · id:{" "}
        <strong className="t7-dato">{JSON.stringify(id)}</strong>
      </p>
      <div className="t6-par">
        <div className="tarjeta t6-lado t6-lado-mal">
          <h3>❌ t.id === id</h3>
          <p>{sinNumber ? sinNumber.titulo : "undefined: no la encuentra"}</p>
        </div>
        <div className="tarjeta t6-lado t6-lado-bien">
          <h3>✅ t.id === Number(id)</h3>
          <p>{conNumber ? conNumber.titulo : "undefined: esa tarea no existe"}</p>
        </div>
      </div>
    </div>
  );
}

export default BuscarTarea;
