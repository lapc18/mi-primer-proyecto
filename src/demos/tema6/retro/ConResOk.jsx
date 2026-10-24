import { useEffect, useState } from "react";
import { log } from "../../../lab/devlog"; // lab

const URL = "https://jsonplaceholder.typicode.com/todos?_limit=3";

function ConResOk() {
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);
  log("render", "ConResOk", { tareas: tareas.length, error }); // lab

  useEffect(() => {
    const cargar = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("Error de red");
        setTareas(await res.json());
      } catch (e) {
        setError(e.message);
      }
    };
    cargar();
  }, []);

  if (error) return <p className="alerta alerta-error">Error: {error}</p>;

  return (
    <ul className="lista">
      {tareas.map((t) => (
        <li key={t.id} className="lista-item">
          {t.title}
        </li>
      ))}
    </ul>
  );
}

export default ConResOk;
